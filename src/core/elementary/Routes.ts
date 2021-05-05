import { Router } from 'express';
import ElementaryController from './Controller';

const routes = Router();

routes.get('/:operation', ElementaryController);

export default routes;
