
export interface User {
    id: string;
    name: string;
    email: string;
}

export type ApiResponse<T> = {
    data: T;
    error?: string;
};

type categoriaType = 'dulce' | 'salado' | 'bebidas';

export interface puestoInterface {
    nombre: string,
    categoria: categoriaType,
}

export interface JwtUserPayload {
    id: string;
    name: string;
    email: string;
}