import { Router } from 'express';
import { PersonController } from '../controllers/PersonController';

const personRouter = Router();
const personController = new PersonController();

personRouter.use(personController.validate);

personRouter.post('/', personController.post);
personRouter.get('/', personController.getAll);
personRouter.get('/:id', personController.getById);
personRouter.put('/:id', personController.put);
personRouter.delete('/:id', personController.delete);

export { personRouter}