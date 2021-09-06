import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';

export interface IDepartamentoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idZona: Types.ObjectId;
    idProvincia: Types.ObjectId;
    idRegion: Types.ObjectId;
    //
    zona?: IZonaDb;
    provincia?: IProvinciaDb;
    region?: IRegionDb;
}

export const SDepartamento = new Schema<IDepartamentoDb>({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idZona: { type: Types.ObjectId, ref: 'zonas' },
    idProvincia: { type: Types.ObjectId, ref: 'provincias' },
    idRegion: { type: Types.ObjectId, ref: 'regioes' },
});

SDepartamento.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});

SDepartamento.virtual('provincia', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProvincia',
    ref: 'provincias',
});

SDepartamento.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});