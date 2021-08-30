import { Document, Schema, Types } from 'mongoose';
import { ISegmentoDb } from './segmento';

export interface ISubsegmentoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idSegmento: Types.ObjectId;
    //
    segmento?: ISegmentoDb;
}

export const SSubsegmento = new Schema<ISubsegmentoDb>({
    nombre: { type: String },
    idSegmento: { type: Types.ObjectId, ref: 'segmentos' },
});

SSubsegmento.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});
