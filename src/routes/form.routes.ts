import { Router } from 'express';
import { createFormData, getFormData } from '../controller/form.controller';

const router = Router();

router.post('/forms', createFormData);
router.get('/forms', getFormData);

export default router;
