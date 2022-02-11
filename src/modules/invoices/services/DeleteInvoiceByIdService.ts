import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe'

import Invoice from '../entities/Invoice';
import IInvoicesRepository from '../repositories/IInvoicesRepository';

@injectable()
class DeleteInvoiceByIdService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}

  public execute(id: number): Invoice[] {
    const invoiceExists = this.invoicesRepository.findById(id);
    if (!invoiceExists) {
      throw new AppError('Invoice not found');
    }
    const invoices = this.invoicesRepository.delete(id);
    return invoices;
  }
}

export default DeleteInvoiceByIdService;
