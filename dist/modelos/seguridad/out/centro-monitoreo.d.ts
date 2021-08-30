import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const ICentroMonitoreoDTOValidation: joi.ObjectSchema<ICentroMonitoreoDTO>;
export declare const ICentroMonitoreoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICentroMonitoreoDTO {
    _id: string;
    nombre: string;
    ubicacion: ICoordenadas;
}
//# sourceMappingURL=centro-monitoreo.d.ts.map