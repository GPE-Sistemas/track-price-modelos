import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IAlertaValidation: joi.ObjectSchema<IAlerta>;
export declare const IAlertaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlerta {
    activa?: boolean;
    idCiudadano?: string;
    ubicacion?: ICoordenadas;
    estadoActual?: string;
    fechaCreacion?: string;
    idsCentroMonitoreo?: string[];
    estados?: any[];
    tiempoRespuesta?: number;
    idOperarioActual?: string;
    idZona?: string;
}
//# sourceMappingURL=alerta.d.ts.map