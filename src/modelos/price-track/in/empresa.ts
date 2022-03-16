import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IEmpresaValidation = joi.object<IEmpresa>({
  nombre: joi.string(),
  propia: joi.boolean(),
  color: joi.string(),
});

export const IEmpresaSwagger = j2s(IEmpresaValidation).swagger;

export interface IEmpresa {
  nombre?: string;
  propia?: boolean;
  color?: string;
}
