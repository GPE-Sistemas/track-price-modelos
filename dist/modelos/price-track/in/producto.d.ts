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
    numeroRegistro?: string;
    tipo?: string;
    unidad?: string;
    idsCompetencias?: string[];
    idsComplementos?: string[];
    idsSustitutos?: string[];
    idsAgrupacion1?: string[];
    idsAgrupacion2?: string[];
}
//# sourceMappingURL=producto.d.ts.map