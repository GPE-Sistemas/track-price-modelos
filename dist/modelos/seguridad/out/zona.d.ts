import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { ICentroMonitoreoDTO } from './centro-monitoreo';
export declare const IZonaDTOValidation: joi.ObjectSchema<IZonaDTO>;
export declare const IZonaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IZonaDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idsPrioridad: string[];
    centrosMonitoreo?: ICentroMonitoreoDTO[];
}
//# sourceMappingURL=zona.d.ts.map