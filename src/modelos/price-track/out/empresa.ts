import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IEmpresaDTOValidation = joi.object<IEmpresaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    propia: joi.boolean(),
});

export const IEmpresaDTOSwagger = j2s(IEmpresaDTOValidation).swagger;

export interface IEmpresaDTO {
    _id: string;
    nombre: string;
    propia: boolean;
}
