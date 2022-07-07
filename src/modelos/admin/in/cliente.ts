import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClienteValidation = joi.object<ICliente>({
  admin: joi.boolean(),
  activo: joi.boolean(),
  nombre: joi.string(),
  condicionComercialDefault: joi.string(),
});

export const IClienteSwagger = j2s(IClienteValidation).swagger;

export interface ICliente {
  admin?: boolean;
  activo?: boolean;
  nombre?: string;
  condicionComercialDefault?: string;
}
