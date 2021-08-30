import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { ICentroMonitoreoDb } from './centro-monitoreo';
export interface IZonaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idsPrioridad: Types.ObjectId[];
    centrosMonitoreo?: ICentroMonitoreoDb[];
}
export declare const SZona: Schema<IZonaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=zona.d.ts.map