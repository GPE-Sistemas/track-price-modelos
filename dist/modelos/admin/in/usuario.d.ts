import joi from 'joi';
export declare const IUsuarioValidation: joi.ObjectSchema<IUsuario>;
export declare const IUsuarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuario {
    activo?: boolean;
    usuario?: string;
    nombre?: string;
    apellido?: string;
    clave?: string;
    idCliente?: string;
    dni?: string;
    email?: string;
    pais?: string;
    telefono?: string;
    rol?: string;
}
//# sourceMappingURL=usuario.d.ts.map