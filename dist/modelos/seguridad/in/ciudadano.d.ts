import joi from 'joi';
import { IUsuario } from '../../admin';
export declare const ICiudadanoValidation: joi.ObjectSchema<ICiudadano>;
export declare const ICiudadanoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICiudadano extends IUsuario {
    prioridad?: string;
}
//# sourceMappingURL=ciudadano.d.ts.map