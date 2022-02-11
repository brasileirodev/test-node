import { container } from 'tsyringe';

import IInvoicesRepository from '@modules/invoices/repositories/IInvoicesRepository';
import InvoicesRepository from '@modules/invoices/repositories/InvoicesRepository';

container.registerSingleton<IInvoicesRepository>('InvoicesRepository', InvoicesRepository);
