import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IClienteDTO, IClienteDTOValidation } from './cliente';

export const IUsuarioDTOValidation = joi.object<IUsuarioDTO>({
    _id: joi.string(),
    activo: joi.boolean(),
    usuario: joi.string(),
    nombre: joi.string(),
    apellido: joi.string(),
    // clave: joi.string(),
    idCliente: joi.string(),
    dni: joi.string(),
    email: joi.string(),
    pais: joi.string(),
    telefono: joi.string(),
    rol: joi.string().allow('admin', 'consultor', 'cargador'),
    //
    cliente: IClienteDTOValidation,
});

export const IUsuarioDTOSwagger = j2s(IUsuarioDTOValidation).swagger;

export interface IUsuarioDTO {
    _id: string;
    activo: boolean;
    usuario: string;
    nombre: string;
    apellido: string;
    // clave: string;
    idCliente: string;
    dni: string;
    email: string;
    pais: string;
    telefono: string;
    rol: string;
    //
    cliente?: IClienteDTO;
}
