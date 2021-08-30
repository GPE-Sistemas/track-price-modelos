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
}
//# sourceMappingURL=producto.d.ts.map