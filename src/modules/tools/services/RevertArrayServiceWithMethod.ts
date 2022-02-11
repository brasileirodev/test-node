class RevertArrayServiceWithMethod {
  public execute(textToRevert: string): string[] {
    const textToRevertArray = textToRevert.split('');
    const revertedText = textToRevertArray.reverse();
    return revertedText;
  }
}

export default RevertArrayServiceWithMethod;
