import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IComposicion, IComposicionValidation } from './composicion';

export const IProductoValidation = joi.object<IProducto>({
    nombre: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmento: joi.array().items(joi.string()),
    composicion: joi.array().items(IComposicionValidation),
});

export const IProductoSwagger = j2s(IProductoValidation).swagger;

export interface IProducto {
    nombre?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmento?: string[];
    composicion?: IComposicion[];
}
