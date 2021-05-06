import { Router } from 'express';

import elementaryRoutes from '../../core/elementary/Routes';
import factorialRoutes from '../../core/factorial/Routes';

const router = Router();

router.use('/elementary', elementaryRoutes);
router.use('/factorial', factorialRoutes);

export default router;
