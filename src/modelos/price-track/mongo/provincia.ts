import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IRegionDb } from './region';

export interface IProvinciaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: Types.ObjectId;
    //
    region?: IRegionDb;
}

export const SProvincia = new Schema<IProvinciaDb>({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idRegion: { type: Types.ObjectId, ref: 'regiones' },
});

SProvincia.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
