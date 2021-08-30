import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IUsuario } from '../../admin';

export const ICargadorValidation = joi.object<ICargador>({
    // Usuario
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
    rol: joi.string().allow('cargador'),
    // Cargador
    idUsuario: joi.string(),
    idsZona: joi.array().items(joi.string()),
    idsRegion: joi.array().items(joi.string()),
    idsProvincia: joi.array().items(joi.string()),
    idsDepartamento: joi.array().items(joi.string()),
    idsLocalidad: joi.array().items(joi.string()),
    global: joi.boolean(),
});

export const ICargadorSwagger = j2s(ICargadorValidation).swagger;

export interface ICargador extends IUsuario {
    idUsuario?: string;
    idsZona?: string[];
    idsRegion?: string[];
    idsProvincia?: string[];
    idsDepartamento?: string[];
    idsLocalidad?: string[];
    global?: boolean;
}
