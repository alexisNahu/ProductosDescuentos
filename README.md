pruebafinal
Aplicación web para la gestión de productos y descuentos, que incluye autenticación con JWT, roles de usuario y reportes de acciones. Está dividida en frontend y backend, usando React, Tailwind CSS, y MySQL.

Tecnologías
Frontend: React, React Router DOM, Tailwind CSS

Backend: Node.js (o el backend que uses), MySQL, Express

Base de datos: MySQL 8.0.36

Autenticación: JWT tokens

Otros: Context API para manejo global de estado

Funcionalidades principales
Registro y login de usuarios con JWT.

Dashboard con diferentes secciones protegidas.

Gestión completa de productos y descuentos (CRUD).

Reportes de acciones realizadas por usuarios.

Roles y permisos para control de acceso.

Filtrado y búsqueda de productos y descuentos.

Estructura del proyecto

/frontend     # Código React con Tailwind CSS y rutas
/backend      # API REST con endpoints para usuarios, productos, descuentos, reportes, etc.
/database    # Scripts y dump de base de datos MySQL
Instalación y ejecución
Prerrequisitos
Node.js >= 16

MySQL 8

npm o yarn

Pasos para frontend

cd frontend
npm install
npm run dev

Para backend

cd backend
npm install
npm run dev
Configuración de base de datos
Crear base de datos MySQL llamada todo.

Importar dump SQL proporcionado en /database/dump.sql o equivalente.

Configurar variables de entorno para conexión MySQL y JWT.

Rutas principales (frontend)
/ - Login

/dashboard - Panel principal (requiere login)

/jonas - Página extra (protegida)

/alexis - Índice de módulos Alexis (protegido)

/alexis/products - Gestión de productos

/alexis/discounts - Gestión de descuentos

/alexis/reports - Reportes

los reportes se generan automatica al realizarse cambio sobre products o discounts

