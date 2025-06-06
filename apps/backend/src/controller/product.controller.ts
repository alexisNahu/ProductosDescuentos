import { Request, Response } from 'express';
import db from '../db/connection';

  let getAllProducts = async (req: Request, res: Response) => {
    try {
      const [rows] = await db.query('SELECT * FROM products');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos' });
    }
  }

   let createProduct = async (req: Request, res: Response) => {
    const { name, price } = req.body;
    try {
      const [result] = await db.query(
        'INSERT INTO products (name, price) VALUES (?, ?)',
        [name, price]
      );
      res.status(201).json({ id: (result as any).insertId, name, price });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto' });
    }
  }

   let updateProduct = async (req: Request, res: Response)=> {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
      await db.query(
        'UPDATE products SET name = ?, price = ? WHERE id = ?',
        [name, price, id]
      );
      res.json({ id, name, price });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el producto' });
    }
  }

   let deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await db.query('DELETE FROM products WHERE id = ?', [id]);
      res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto' });
    }
  }


  export {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
};
