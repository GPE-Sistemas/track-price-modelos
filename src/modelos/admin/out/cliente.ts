import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IClienteDTOValidation = joi.object<IClienteDTO>({
    _id: joi.string(),
    admin: joi.boolean(),
    activo: joi.boolean(),
    nombre: joi.string(),
});

export const IClienteDTOSwagger = j2s(IClienteDTOValidation).swagger;

export interface IClienteDTO {
    _id: string;
    admin: boolean;
    activo: boolean;
    nombre: string;
}
