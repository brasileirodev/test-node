import { inject, injectable } from 'tsyringe'
import Invoice from '@modules/invoices/entities/Invoice';
import IInvoicesRepository from '@modules/invoices/repositories/IInvoicesRepository';
import IUpdateInvoiceDTO from '../dtos/IUpdateInvoiceDTO';

@injectable()
class UpdateInvoiceService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}

  public execute(data: IUpdateInvoiceDTO): Invoice {
    this.invoicesRepository.update(data);
    const invoice = this.invoicesRepository.findById(data.id);
    if (!invoice) {
      throw new Error('Fail to update, invoice not found');
    }
    return invoice;
  }
}

export default UpdateInvoiceService;
