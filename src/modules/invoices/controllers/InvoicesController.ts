import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { isNaN } from 'lodash'
import ICreateInvoiceDTO from '../dtos/ICreateInvoiceDTO';
import CreateUserService from '../services/CreateInvoiceService';
import FindInvoiceByIdService from '../services/FindInvoiceByIdService';
import UpdateInvoiceService from '../services/UpdateInvoiceService';
import IUpdateInvoiceDTO from '../dtos/IUpdateInvoiceDTO';
import DeleteInvoiceByIdService from '../services/DeleteInvoiceByIdService';

export default class InvoicesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    if (!data.adquirentemaquininha) {
      throw new AppError('Adquirente da maquininha não informado');
    }
    if (!data.datadevencimento) {
      throw new AppError('Data de vencimento não informada');
    }
    if (!data.emissordocartao) {
      throw new AppError('Emissor do cartão não informado');
    }
    if (!data.nomedaloja) {
      throw new AppError('Nome da loja não informado');
    }
    if (!data.titulardoativo) {
      throw new AppError('Título do ativo não informado');
    }
    if (!data.valordoativo) {
      throw new AppError('Valor do ativo não informado');
    }

    const invoiceToCreate: ICreateInvoiceDTO = {
      adquirentemaquininha: data.adquirentemaquininha,
      datadevencimento: data.datadevencimento,
      emissordocartao: data.emissordocartao,
      nomedaloja: data.nomedaloja,
      titulardoativo: data.titulardoativo,
      valordoativo: data.valordoativo,
    };
    const createUserService = container.resolve(CreateUserService);
    const invoiceCreated = createUserService.execute(invoiceToCreate);
    return response.json(invoiceCreated);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    if (!id) {
      throw new AppError('Param id is required');
    }
    const idAsNumber = Number(id);
    if (isNaN(idAsNumber)) {
      throw new AppError('Param id must be a number');
    }
    const findInvoiceByIdService = container.resolve(FindInvoiceByIdService);
    const invoice = findInvoiceByIdService.execute(idAsNumber);
    if (!invoice) {
      throw new AppError('Invoice not found');
    }
    return response.json(invoice);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    if (!id) {
      throw new AppError('Param id is required');
    }
    const idAsNumber = Number(id);
    if (isNaN(idAsNumber)) {
      throw new AppError('Param id must be a number');
    }
    const data = request.body;
    const validInputKeys = ['adquirentemaquininha', 'datadevencimento', 'emissordocartao', 'nomedaloja', 'titulardoativo', 'valordoativo'];
    const inputValidated = Object.keys(data).filter((input) => validInputKeys.includes(input));

    const invoiceToUpdate: IUpdateInvoiceDTO = {
      id: idAsNumber,
      ...inputValidated.reduce((acc, input) => ({ ...acc, [input]: data[input] }), {}),
    };

    const updateInvoiceService = container.resolve(UpdateInvoiceService);
    const invoiceUpdated = updateInvoiceService.execute(invoiceToUpdate);
    return response.json(invoiceUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    if (!id) {
      throw new AppError('Param id is required');
    }
    const idAsNumber = Number(id);
    if (isNaN(idAsNumber)) {
      throw new AppError('Param id must be a number');
    }
    const deleteInvoiceByIdService = container.resolve(DeleteInvoiceByIdService);
    const invoicesWithoutDeleted = deleteInvoiceByIdService.execute(idAsNumber);

    return response.json(invoicesWithoutDeleted);
  }
}
