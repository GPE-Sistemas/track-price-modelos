import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const ICentroMonitoreoValidation: joi.ObjectSchema<ICentroMonitoreo>;
export declare const ICentroMonitoreoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICentroMonitoreo {
    nombre?: string;
    ubicacion?: ICoordenadas;
}
//# sourceMappingURL=centro-monitoreo.d.ts.map