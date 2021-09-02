import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IComposicion, IComposicionValidation } from './composicion';

export const IProductoValidation = joi.object<IProducto>({
    nombre: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmento: joi.array().items(joi.string()),
    composicion: joi.array().items(IComposicionValidation),
    sku: joi.string(),
    tipo: joi.string().allow('Genérico', 'Diferenciado'),
    unidad: joi.string().allow('lt', 'kg', 'otro'),
    idsCompetencias: joi.array().items(joi.string()),
    idsComplementos: joi.array().items(joi.string()),
    idsSustitutos: joi.array().items(joi.string()),
});

export const IProductoSwagger = j2s(IProductoValidation).swagger;

export interface IProducto {
    nombre?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmento?: string[];
    composicion?: IComposicion[];
    sku?: string;
    tipo?: string; // producto generico / diferenciado
    unidad?: string; // unidad en que se vende el producto L/Kg
    idsCompetencias?: string[]; // Ids de productos de marca propia que compiten con este
    idsComplementos?: string[]; // Ids de productos complementan el uso de este producto
    idsSustitutos?: string[]; // Ids de productos que son clones de este (misma marca, misma composicion)
}
