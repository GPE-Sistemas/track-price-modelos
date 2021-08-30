import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { ICentroMonitoreoDTO } from './centro-monitoreo';
import { ICiudadanoDTO } from './ciudadano';
import { IOperarioDTO } from './operario';
import { IZonaDTO } from './zona';
export declare const IAlertaDTOValidation: joi.ObjectSchema<IAlertaDTO>;
export declare const IAlertaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaDTO {
    _id: string;
    activa: boolean;
    idCiudadano: string;
    ubicacion: ICoordenadas;
    estadoActual: string;
    fechaCreacion: string;
    idsCentroMonitoreo: string[];
    estados: any[];
    tiempoRespuesta: number;
    idOperarioActual: string;
    idZona: string;
    zona?: IZonaDTO;
    operario?: IOperarioDTO;
    ciudadano?: ICiudadanoDTO;
    centrosMonitoreo?: ICentroMonitoreoDTO[];
}
//# sourceMappingURL=alerta.d.ts.map