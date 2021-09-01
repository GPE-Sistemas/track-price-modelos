import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IUsuarioValidation = joi.object<IUsuario>({
    activo: joi.boolean(),
    usuario: joi.string(),
    nombre: joi.string(),
    apellido: joi.string(),
    clave: joi.string(),
    idCliente: joi.string(),
    dni: joi.string(),
    email: joi.string(),
    pais: joi.string(),
    telefono: joi.string(),
    rol: joi.string().allow('admin', 'consultor', 'relevador'),
});

export const IUsuarioSwagger = j2s(IUsuarioValidation).swagger;

export interface IUsuario {
    activo?: boolean;
    usuario?: string;
    nombre?: string;
    apellido?: string;
    clave?: string;
    idCliente?: string;
    dni?: string;
    email?: string;
    pais?: string;
    telefono?: string;
    rol?: string;
}
