import { Router } from 'express';
import FactorialController from './Controller';

const routes = Router();

routes.get('/', FactorialController);

export default routes;
