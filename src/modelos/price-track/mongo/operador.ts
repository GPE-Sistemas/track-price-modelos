import { Document, Schema, Types } from 'mongoose';
import { IUsuarioDb } from '../../admin';
import { IDepartamentoDb } from './departamento';
import { ILocalidadDb } from './localidad';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';

export interface IOperadorDb extends Document, IUsuarioDb {
    // Operador
    _id: Types.ObjectId;
    idUsuario: Types.ObjectId;
    idsZona: Types.ObjectId[];
    idsRegion: Types.ObjectId[];
    idsProvincia: Types.ObjectId[];
    idsDepartamento: Types.ObjectId[];
    idsLocalidad: Types.ObjectId[];
    global: boolean;
    // Populate
    zonas?: IZonaDb[];
    regiones?: IRegionDb[];
    provincias?: IProvinciaDb[];
    departamentos?: IDepartamentoDb[];
    localidades?: ILocalidadDb[];
}

export const SOperador = new Schema<IOperadorDb>({
    // Usuario
    activo: { type: Boolean },
    usuario: { type: String, required: true, unique: true, lowercase: true },
    nombre: { type: String },
    apellido: { type: String },
    clave: { type: String },
    // idCliente: { type: Types.ObjectId }, // Id de la db de administracion
    dni: { type: String },
    email: { type: String },
    pais: { type: String },
    telefono: { type: String },
    rol: { type: String },
    // Operador
    idUsuario: { type: Types.ObjectId, required: true, unique: true }, // Id de la db de administracion
    idsZona: [{ type: Types.ObjectId, ref: 'zonas' }],
    idsRegion: [{ type: Types.ObjectId, ref: 'regiones' }],
    idsProvincia: [{ type: Types.ObjectId, ref: 'provincias' }],
    idsDepartamento: [{ type: Types.ObjectId, ref: 'departamentos' }],
    idsLocalidad: [{ type: Types.ObjectId, ref: 'localidades' }],
    global: { type: Boolean }
});

SOperador.virtual('zonas', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsZona',
    ref: 'zonas',
});

SOperador.virtual('regiones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsRegion',
    ref: 'regiones',
});

SOperador.virtual('provincias', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsProvincia',
    ref: 'provincias',
});

SOperador.virtual('departamentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsDepartamento',
    ref: 'departamentos',
});

SOperador.virtual('localidades', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsLocalidad',
    ref: 'localidades',
});