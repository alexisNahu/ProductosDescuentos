import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const puestos = mysqlTable('puestos', {
    id: int('id').primaryKey().autoincrement(),
    nombre: varchar('nombre', { length: 100 }).notNull(),
    categoria: varchar('categoria', {length:10, enum: ['dulce', 'salado', 'bebidas'] }),
});