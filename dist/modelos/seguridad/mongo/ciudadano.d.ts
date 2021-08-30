import { Document, Schema, Types } from 'mongoose';
import { IUsuarioDb } from '../../admin';
export interface ICiudadanoDb extends Document, IUsuarioDb {
    _id: Types.ObjectId;
    prioridad?: string;
}
export declare const SCiudadano: Schema<ICiudadanoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=ciudadano.d.ts.map