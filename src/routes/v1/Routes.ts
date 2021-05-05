import { Router } from 'express';

import elementaryRoutes from '../../core/elementary/Routes';

const router = Router();

router.use('/elementary', elementaryRoutes);

export default router;
