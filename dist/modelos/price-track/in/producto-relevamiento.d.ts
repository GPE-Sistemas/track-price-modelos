import joi from 'joi';
import { IComposicion } from '..';
export declare const IProductoRelevamientoValidation: joi.ObjectSchema<IProductoRelevamiento>;
export declare const IProductoRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProductoRelevamiento {
    idProducto?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmentos?: string[];
    idsSubsegmentosPropios?: string[];
    composicion?: IComposicion[];
}
//# sourceMappingURL=producto-relevamiento.d.ts.map