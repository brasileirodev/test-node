import ICreateInvoiceDTO from '@modules/invoices/dtos/ICreateInvoiceDTO';
import Invoice from '@modules/invoices/entities/Invoice';
import IInvoicesRepository from '@modules/invoices/repositories/IInvoicesRepository';
import AppError from '@shared/errors/AppError';
import IUpdateInvoiceDTO from '../dtos/IUpdateInvoiceDTO';

class InvoicesRepository implements IInvoicesRepository {
  private invoices: Invoice[] = [];

  public findById(id: number): Invoice | undefined {
    const invoiceFound = this.invoices.find((invoice) => invoice.id === id);
    return invoiceFound;
  }

  public create(data: ICreateInvoiceDTO): Invoice {
    const invoice = new Invoice();
    Object.assign(invoice, { id: this.invoices.length + 1 }, { ...data });
    return invoice;
  }

  public update(data: IUpdateInvoiceDTO): Invoice[] {
    if (this.invoices.length > 0) {
      const invoicesUpdated = this.invoices.map((invoice) => {
        if (invoice.id === data.id) {
          const invoiceUpdated = Object.assign(invoice, { ...data });
          return invoiceUpdated;
        }
        return invoice;
      })
      this.invoices = invoicesUpdated;
      return invoicesUpdated;
    }
    throw new AppError('No invoices exists');
  }

  public save(invoice: Invoice): Invoice[] {
    this.invoices.push(invoice);
    return this.invoices;
  }

  public delete(id: number): Invoice[] {
    if (this.invoices.length > 0) {
      this.invoices = this.invoices.filter((invoice) => invoice.id !== id);
      return this.invoices;
    }
    throw new AppError('No invoices exists');
  }
}

export default InvoicesRepository;
