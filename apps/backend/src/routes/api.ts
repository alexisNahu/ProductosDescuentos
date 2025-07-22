// src/routes/index.ts
import { Router, Request, Response } from 'express';
import { login } from 'src/controller/auth.controller';

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from 'src/controller/product.controller';

import {
  createDiscount,
  deleteDiscount,
  getAllDiscounts,
  getDiscountById,
  getDiscountByRate,
  updateDiscount,
} from 'src/controller/discounts.controller';

import { getAllReports } from 'src/controller/reports.controller';

import verifyToken from 'src/middleware/auth';

const router = Router();

// Ruta básica
router.get('/dashboard', (req: Request, res: Response) => {
  res.json({ message: 'Bienvenido a la API de la tienda' });
});

router.get('/status', (req, res) => {
  res.json({ status: 'OK' });
});

// Autenticación
router.post('/login', login);

router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

// Productos
router.get('/products', verifyToken, getAllProducts);
router.post('/products', verifyToken, createProduct);
router.put('/products/:id', verifyToken, updateProduct);
router.delete('/products/:id', verifyToken, deleteProduct);

// Descuentos
router.get('/discounts', verifyToken, getAllDiscounts);
router.post('/discounts', verifyToken, createDiscount);
router.get('/discount/getByRate/:discount_rate', verifyToken, getDiscountByRate)
router.put('/discounts/:id', verifyToken, updateDiscount);
router.delete('/discounts/:id', verifyToken, deleteDiscount);
router.get('/discounts/getById/:id', verifyToken, getDiscountById)

// Reportes 
router.get('/reports', verifyToken, getAllReports);  // <-- ruta para listar reportes


export default router;
