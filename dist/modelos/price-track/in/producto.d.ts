import joi from 'joi';
import { IComposicion } from './composicion';
export declare const IProductoValidation: joi.ObjectSchema<IProducto>;
export declare const IProductoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProducto {
    nombre?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmentos?: string[];
    idsSubsegmentosPropios?: string[];
    composicion?: IComposicion[];
    sku?: string;
    numeroRegistro?: string;
    tipo?: string;
    unidad?: string;
    formulacion?: string;
    toxicidad?: string;
    dosisMedia?: number;
    idsCompetencias?: string[];
    idsComplementos?: string[];
    idsSustitutos?: string[];
    idsAgrupacion1?: string[];
    idsAgrupacion2?: string[];
}
//# sourceMappingURL=producto.d.ts.map