import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IProductoRelevamientoValidation = joi.object<IProductoRelevamiento>({
    idProducto: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmentos: joi.array().items(joi.string()),
    idsPrincipiosActivos: joi.array().items(joi.string()),
    idsFamiliasQuimicas: joi.array().items(joi.string()),
});

export const IProductoRelevamientoSwagger = j2s(IProductoRelevamientoValidation).swagger;

export interface IProductoRelevamiento {
    idProducto?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmentos?: string[];
    idsPrincipiosActivos?: string[];
    idsFamiliasQuimicas?: string[];
}
