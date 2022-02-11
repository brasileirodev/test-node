export default interface IUpdateInvoiceDTO {
  id: number;
  nomedaloja?: string;
  adquirentemaquininha?: string;
  emissordocartao?: string;
  valordoativo?: number;
  titulardoativo?: string;
  datadevencimento?: Date;
}
