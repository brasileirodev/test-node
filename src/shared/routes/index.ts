import { Router } from 'express';
import invoicesRouter from '@modules/invoices/routes/invoices.routes';
import toolsRouter from '@modules/tools/routes/tools.routes';

const routes = Router();

routes.use('/invoices', invoicesRouter);
routes.use('/tools', toolsRouter);

export default routes;
