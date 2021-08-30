import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';

export interface IRegionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
}

export const SRegion = new Schema<IRegionDb>({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
});
