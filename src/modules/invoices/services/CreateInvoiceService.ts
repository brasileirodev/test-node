import { inject, injectable } from 'tsyringe'
import Invoice from '@modules/invoices/entities/Invoice';
import IInvoicesRepository from '@modules/invoices/repositories/IInvoicesRepository';
import ICreateInvoiceDTO from '../dtos/ICreateInvoiceDTO';

@injectable()
class CreateUserService {
  constructor(
    @inject('InvoicesRepository')
    private invoicesRepository: IInvoicesRepository,
  ) {}

  public execute(data: ICreateInvoiceDTO): Invoice[] {
    const invoice = this.invoicesRepository.create(data);
    const invoices = this.invoicesRepository.save(invoice);
    return invoices;
  }
}

export default CreateUserService;
