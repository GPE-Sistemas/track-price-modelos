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
    unidad: joi.string().allow('L', 'Kg', 'Litro'),
    idsCompetencia: joi.array().items(joi.string()),
    idsAgrupacion: joi.array().items(joi.string()),
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
    idsCompetencia?: string[]; // Ids de productos de marca propia que compiten con este
    idsAgrupacion?: string[]; // Ids de productos que son clones de este (misma marca, misma composicion)
}
