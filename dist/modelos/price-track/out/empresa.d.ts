import joi from 'joi';
export declare const IEmpresaDTOValidation: joi.ObjectSchema<IEmpresaDTO>;
export declare const IEmpresaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEmpresaDTO {
    _id: string;
    nombre: string;
    propia: boolean;
    color: string;
}
//# sourceMappingURL=empresa.d.ts.map