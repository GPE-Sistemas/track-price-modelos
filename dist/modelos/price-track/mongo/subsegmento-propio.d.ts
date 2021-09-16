import { Document, Schema, Types } from 'mongoose';
import { ISegmentoDb } from './segmento';
export interface ISubsegmentoPropioDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idSegmento: Types.ObjectId;
    segmento?: ISegmentoDb;
}
export declare const SSubsegmentoPropio: Schema<ISubsegmentoPropioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=subsegmento-propio.d.ts.map