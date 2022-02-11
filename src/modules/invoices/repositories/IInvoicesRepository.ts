import ICreateInvoiceDTO from '../dtos/ICreateInvoiceDTO';
import IUpdateInvoiceDTO from '../dtos/IUpdateInvoiceDTO';
import Invoice from '../entities/Invoice';

export default interface IInvoicesRepository {
  findById(id: number): Invoice | undefined;
  update(data: IUpdateInvoiceDTO): Invoice[];
  create(data: ICreateInvoiceDTO): Invoice;
  save(invoice: Invoice): Invoice[];
  delete(id: number): Invoice[];
}
