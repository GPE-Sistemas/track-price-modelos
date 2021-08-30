import { Document, Schema, Types } from 'mongoose';
import { ISegmentoDb } from './segmento';
export interface ISubsegmentoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idSegmento: Types.ObjectId;
    segmento?: ISegmentoDb;
}
export declare const SSubsegmento: Schema<ISubsegmentoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=subsegmento.d.ts.map