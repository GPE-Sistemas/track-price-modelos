import joi from 'joi';
export declare const IEmpresaValidation: joi.ObjectSchema<IEmpresa>;
export declare const IEmpresaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEmpresa {
    nombre?: string;
    propia?: boolean;
}
//# sourceMappingURL=empresa.d.ts.map