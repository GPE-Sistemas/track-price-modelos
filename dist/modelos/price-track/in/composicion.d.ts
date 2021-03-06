import joi from 'joi';
export declare const IComposicionValidation: joi.ObjectSchema<IComposicion>;
export declare const IComposicionSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComposicion {
    idFamiliaQuimica?: string;
    idPrincipioActivo?: string;
    concentracion?: number;
    formulacion?: string;
    claseTox?: string;
    unidad?: string;
    principal?: boolean;
}
//# sourceMappingURL=composicion.d.ts.map