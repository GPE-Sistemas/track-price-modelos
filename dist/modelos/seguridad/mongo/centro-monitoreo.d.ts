import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
export interface ICentroMonitoreoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    ubicacion: ICoordenadas;
}
export declare const SCentroMonitoreo: Schema<ICentroMonitoreoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=centro-monitoreo.d.ts.map