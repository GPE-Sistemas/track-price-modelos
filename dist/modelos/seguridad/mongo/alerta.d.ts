import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { ICentroMonitoreoDb } from './centro-monitoreo';
import { ICiudadanoDb } from './ciudadano';
import { IOperarioDb } from './operario';
import { IZonaDb } from './zona';
export interface IAlertaDb extends Document {
    _id: Types.ObjectId;
    activa: boolean;
    idCiudadano: Types.ObjectId;
    ubicacion: ICoordenadas;
    estadoActual: string;
    fechaCreacion: Date;
    idsCentroMonitoreo: Types.ObjectId[];
    estados: any[];
    tiempoRespuesta: number;
    idOperarioActual: Types.ObjectId;
    idZona: Types.ObjectId;
    zona?: IZonaDb;
    operario?: IOperarioDb;
    ciudadano?: ICiudadanoDb;
    centrosMonitoreo?: ICentroMonitoreoDb[];
}
export declare const SAlerta: Schema<IAlertaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=alerta.d.ts.map