import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDb } from './departamento';
import { ILocalidadDb } from './localidad';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';

export interface IUbicacionRelevamientoDb extends Document {
    coordenadas: ICoordenadas;
    idRegion: Types.ObjectId;
    idZona: Types.ObjectId;
    idProvincia: Types.ObjectId;
    idDepartamento: Types.ObjectId;
    idLocalidad: Types.ObjectId;
    // Populate
    region?: IRegionDb;
    zona?: IZonaDb;
    provincia?: IProvinciaDb;
    departamento?: IDepartamentoDb;
    localidad?: ILocalidadDb;
}

export const SUbicacionRelevamiento = new Schema<IUbicacionRelevamientoDb>({
    coordenadas: { type: Object },
    idRegion: { type: Types.ObjectId, ref: 'regiones' },
    idZona: { type: Types.ObjectId, ref: 'zonas' },
    idProvincia: { type: Types.ObjectId, ref: 'provincias' },
    idDepartamento: { type: Types.ObjectId, ref: 'departamentos' },
    idLocalidad: { type: Types.ObjectId, ref: 'localidades' },
});

SUbicacionRelevamiento.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});

SUbicacionRelevamiento.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});

SUbicacionRelevamiento.virtual('provincia', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProvincia',
    ref: 'provincias',
});

SUbicacionRelevamiento.virtual('departamento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDepartamento',
    ref: 'departamentos',
});

SUbicacionRelevamiento.virtual('localidad', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLocalidad',
    ref: 'localidades',
});
