import { Document, Schema, Types } from 'mongoose';
import { IUsuarioDb } from '../../admin';
import { ICentroMonitoreoDb } from './centro-monitoreo';
export interface IOperarioDb extends Document, IUsuarioDb {
    _id: Types.ObjectId;
    idCentroMonitoreo: Types.ObjectId;
    centroMonitoreo?: ICentroMonitoreoDb;
}
export declare const SOperario: Schema<IOperarioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=operario.d.ts.map