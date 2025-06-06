import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { User } from '../controller/User';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from 'src/controller/product.controller';

const router = Router();


router.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: 'Ruta protegida', user: req.user });
});

router.get('/status', (req, res) => {
  res.json({ status: 'OK' });
});

router.post('/login', (req, res) => {
  User(req, res);
});

router.get('/products', getAllProducts);
router.post('/products', authenticate, createProduct);
router.put('/products/:id', authenticate, updateProduct);
router.delete('/products/:id', authenticate, deleteProduct);

export default router;
