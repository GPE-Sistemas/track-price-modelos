import joi from 'joi';
import { IUsuarioDTO } from '../../admin';
import { ICentroMonitoreoDTO } from './centro-monitoreo';
export declare const IOperarioDTOValidation: joi.ObjectSchema<IOperarioDTO>;
export declare const IOperarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperarioDTO extends IUsuarioDTO {
    idCentroMonitoreo: string;
    centroMonitoreo?: ICentroMonitoreoDTO;
}
//# sourceMappingURL=operario.d.ts.map