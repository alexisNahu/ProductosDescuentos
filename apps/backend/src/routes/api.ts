import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { User } from '../controller/User';

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

export default router;