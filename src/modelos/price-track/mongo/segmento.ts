import { Document, Schema, Types } from 'mongoose';

export interface ISegmentoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}

export const SSegmento = new Schema<ISegmentoDb>({
    nombre: { type: String },
});
