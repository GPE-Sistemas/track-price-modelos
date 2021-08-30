import { Document, Schema, Types } from 'mongoose';
export interface ISegmentoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const SSegmento: Schema<ISegmentoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=segmento.d.ts.map