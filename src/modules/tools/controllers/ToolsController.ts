import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import RevertArrayServiceWithMethod from '../../tools/services/RevertArrayServiceWithMethod';
import RevertArrayServiceWithoutMethod from '../services/RevertArrayServiceWithoutMethod';

export default class ToolsController {
  public async revertArrayWithMethod(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    if (!data.textToRevert) {
      throw new AppError('Text to revert is required');
    }
    const revertArrayWithMethod = new RevertArrayServiceWithMethod();
    const textRevertedLikeArray = revertArrayWithMethod.execute(data.textToRevert);
    return response.json(textRevertedLikeArray);
  }

  public async revertArrayWithoutMethod(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    if (!data.textToRevert) {
      throw new AppError('Text to revert is required');
    }
    const revertArrayWithoutMethod = new RevertArrayServiceWithoutMethod();
    const textRevertedLikeArray = revertArrayWithoutMethod.execute(data.textToRevert);
    return response.json(textRevertedLikeArray);
  }
}
