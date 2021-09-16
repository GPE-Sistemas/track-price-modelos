import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IComposicion, IComposicionValidation } from '..';

export const IProductoRelevamientoValidation = joi.object<IProductoRelevamiento>({
    idProducto: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmentos: joi.array().items(joi.string()),
    idsSubsegmentosPropios: joi.array().items(joi.string()),
    composicion: joi.array().items(IComposicionValidation),
});

export const IProductoRelevamientoSwagger = j2s(IProductoRelevamientoValidation).swagger;

export interface IProductoRelevamiento {
    idProducto?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmentos?: string[];
    idsSubsegmentosPropios?: string[];
    composicion?: IComposicion[];
}
