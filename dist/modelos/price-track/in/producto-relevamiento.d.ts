import joi from 'joi';
export declare const IProductoRelevamientoValidation: joi.ObjectSchema<IProductoRelevamiento>;
export declare const IProductoRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProductoRelevamiento {
    idProducto?: string;
    idEmpresa?: string;
    idSegmento?: string;
    idsSubsegmentos?: string[];
    idsPrincipiosActivos?: string[];
    idsFamiliasQuimicas?: string[];
}
//# sourceMappingURL=producto-relevamiento.d.ts.map