import { revertOrderArray } from '../../../shared/util/index';

class RevertArrayServiceWithoutMethod {
  public execute(textToRevert: string): string[] {
    const textToRevertArray = textToRevert.split('');
    const revertedText = revertOrderArray(textToRevertArray);
    return revertedText;
  }
}

export default RevertArrayServiceWithoutMethod;
