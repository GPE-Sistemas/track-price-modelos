import joi from 'joi';
import { IComposicion } from './composicion';
export declare const IProductoValidation: joi.ObjectSchema<IProducto>;
export declare const IProductoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProducto {
    nombre?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmento?: string[];
    composicion?: IComposicion[];
    sku?: string;
    tipo?: string;
    unidad?: string;
    idsCompetencia?: string[];
    idsAgrupacion?: string[];
}
//# sourceMappingURL=producto.d.ts.map