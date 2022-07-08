import joi from 'joi';
export declare const IClienteValidation: joi.ObjectSchema<ICliente>;
export declare const IClienteSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICliente {
    admin?: boolean;
    activo?: boolean;
    nombre?: string;
    condicionComercialDefault?: string;
}
//# sourceMappingURL=cliente.d.ts.map