// backend/db/queries.ts

// Consultas para la tabla de productos
export const productQueries = {
  getAll: 'SELECT * FROM products ORDER BY id ASC',
  getById: 'SELECT * FROM products WHERE id = ?',
  create: 'INSERT INTO products (name, price) VALUES (?, ?)',
  update: 'UPDATE products SET name = ?, price = ? WHERE id = ?',
  delete: 'DELETE FROM products WHERE id = ?'
};

export const discountQueries = {
  getAll: 'SELECT * FROM discounts ORDER BY id ASC',
  getById: 'SELECT * FROM discounts WHERE id = ?',
  getByProduct: 'SELECT * FROM discounts WHERE product_id = ? ORDER BY id ASC'
};

// Consultas para otras tablas pueden agregarse aquí
