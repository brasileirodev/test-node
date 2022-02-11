import { Router } from 'express';
import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/revertarraywithmethod', toolsController.revertArrayWithMethod);
toolsRouter.post('/revertarraywithoutmethod', toolsController.revertArrayWithoutMethod);

export default toolsRouter;
