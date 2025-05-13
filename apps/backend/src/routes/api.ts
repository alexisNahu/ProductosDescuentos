import { Router } from 'express';
import { authenticate } from '../middleware/auth';

const router = Router();


router.get('/dashboard', authenticate, (req, res) => {
    res.json({ message: 'Ruta protegida', user: req.user });
});

router.get('/status', (req, res) => {
    res.json({ status: 'OK' });
});

export default router;