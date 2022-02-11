import CreateInvoiceService from '@modules/invoices/services/CreateInvoiceService';
import InvoicesRepository from '@modules/invoices/repositories/InvoicesRepository';

describe('CreateInvoice', () => {
  it('should be able to create a new invoice', async () => {
    const invoicesRepository = new InvoicesRepository();
    const createInvoice = new CreateInvoiceService(invoicesRepository);

    const invoice = createInvoice.execute({
      nomedaloja: 'brasileirodev',
      adquirentemaquininha: 'Marcel Brasileiro',
      emissordocartao: 'Santander',
      valordoativo: 2000,
      titulardoativo: 'Isabelle Brasileiro',
      datadevencimento: new Date('2015-03-25'),
    });

    expect(invoice[0]).toHaveProperty('id');
    expect(invoice[0].nomedaloja).toBe('brasileirodev');
  });
});
