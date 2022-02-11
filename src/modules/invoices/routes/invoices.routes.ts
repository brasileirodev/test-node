import { Router } from 'express';
import InvoicesController from '../controllers/InvoicesController';

const invoicesRouter = Router();
const invoicesController = new InvoicesController();

invoicesRouter.post('/', invoicesController.create);
invoicesRouter.get('/:id', invoicesController.find);
invoicesRouter.put('/:id', invoicesController.update);
invoicesRouter.delete('/:id', invoicesController.delete);

export default invoicesRouter;
