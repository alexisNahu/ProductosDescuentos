import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Interfaz con los campos que esperas en el payload del JWT.
// Ajusta según lo que guardes en el token (id, email, rol, etc.).
interface TokenUser {
  id: number;
  email: string;
  // añade aquí cualquier otro campo que pongas en el payload
}

// Extendemos la interfaz Request de Express para que req.user exista:
declare module 'express-serve-static-core' {
  interface Request {
    user?: TokenUser;
  }
}

// Carga la clave secreta de tus variables de entorno (o pone un valor por defecto)
const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta_por_defecto';

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    // Enviamos respuesta y «retornamos sin valor» para que la firma sea void
    res.status(401).json({ message: 'Falta token de autenticación' });
    return;
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    res.status(401).json({ message: 'Formato de token inválido' });
    return;
  }

  const token = parts[1];

  try {
    // Lo verificamos de forma síncrona
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload & TokenUser;

    // Adjuntamos a req.user los campos que nos interesen
    req.user = {
      id: payload.id,
      email: payload.email,
      // …otros campos que tengas en el payload
    };

    // Llamamos a next() para que siga al siguiente middleware / controlador
    next();
  } catch (err: any) {
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'El token ha expirado' });
      return;
    }
    res.status(401).json({ message: 'Token inválido' });
    return;
  }
}
