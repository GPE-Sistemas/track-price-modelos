import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDb } from './departamento';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';

export interface ILocalidadDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: Types.ObjectId;
    idProvincia: Types.ObjectId;
    idZona: Types.ObjectId;
    idRegion: Types.ObjectId;
    //
    departamento?: IDepartamentoDb;
    provincia?: IProvinciaDb;
    zona?: IZonaDb;
    region?: IRegionDb;
}

export const SLocalidad = new Schema<ILocalidadDb>({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idDepartamento: { type: Types.ObjectId, ref: 'departamentos' },
    idProvincia: { type: Types.ObjectId, ref: 'provincias' },
    idZona: { type: Types.ObjectId, ref: 'zonas' },
    idRegion: { type: Types.ObjectId, ref: 'regioes' },
});

SLocalidad.virtual('departamento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDepartamento',
    ref: 'departamentos',
});

SLocalidad.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});

SLocalidad.virtual('provincia', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProvincia',
    ref: 'provincias',
});

SLocalidad.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
