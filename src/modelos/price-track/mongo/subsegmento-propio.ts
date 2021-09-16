import { Document, Schema, Types } from 'mongoose';
import { ISegmentoDb } from './segmento';

export interface ISubsegmentoPropioDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idSegmento: Types.ObjectId;
    //
    segmento?: ISegmentoDb;
}

export const SSubsegmentoPropio = new Schema<ISubsegmentoPropioDb>({
    nombre: { type: String },
    idSegmento: { type: Types.ObjectId, ref: 'segmentos' },
});

SSubsegmentoPropio.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});
