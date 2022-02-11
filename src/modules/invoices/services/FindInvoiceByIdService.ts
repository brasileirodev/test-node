import { inject, injectable } from 'tsyringe'

import Invoice from '../entities/Invoice';
import IInvoicesRepository from '../repositories/IInvoicesRepository';

@injectable()
class FindInvoiceByIdService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}

  public execute(id: number): Invoice | undefined {
    const invoice = this.invoicesRepository.findById(id);
    return invoice;
  }
}

export default FindInvoiceByIdService;
