import joi from 'joi';
import { IUsuarioDTO } from '../../admin';
export declare const ICiudadanoDTOValidation: joi.ObjectSchema<ICiudadanoDTO>;
export declare const ICiudadanoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICiudadanoDTO extends IUsuarioDTO {
    prioridad?: string;
}
//# sourceMappingURL=ciudadano.d.ts.map