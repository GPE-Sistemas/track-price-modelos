import joi from 'joi';
import { IUsuario } from '../../admin';
export declare const IOperarioValidation: joi.ObjectSchema<IOperario>;
export declare const IOperarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperario extends IUsuario {
    idCentroMonitoreo?: string;
}
//# sourceMappingURL=operario.d.ts.map