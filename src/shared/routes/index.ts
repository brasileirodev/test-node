import { Router } from 'express';
import invoicesRouter from '@modules/invoices/routes/invoices.routes';

const routes = Router();

routes.use('/invoices', invoicesRouter);

export default routes;
