import { Document, Schema, Types } from 'mongoose';
import { IComposicionDb, ISubsegmentoPropioDb, SComposicion } from '..';
import { IEmpresaDb } from './empresa';
import { IFamiliaQuimicaDb } from './familia-quimica';
import { IPrincipioActivoDb } from './principio-activo';
import { IProductoDb } from './producto';
import { ISegmentoDb } from './segmento';
import { ISubsegmentoDb } from './subsegmento';

export interface IProductoRelevamientoDb extends Document {
    idProducto: Types.ObjectId;
    idEmpresa: Types.ObjectId;
    idSegmento: Types.ObjectId;
    idsSubsegmentos: Types.ObjectId[];
    idsSubsegmentosPropios: Types.ObjectId[];
    composicion?: IComposicionDb[];
    numeroRegistro: string;
    // Populate
    producto?: IProductoDb;
    empresa?: IEmpresaDb;
    segmento?: ISegmentoDb;
    subsegmentos?: ISubsegmentoDb[];
    subsegmentosPropios?: ISubsegmentoPropioDb[];
    principiosActivos?: IPrincipioActivoDb[];
    familiasQuimicas?: IFamiliaQuimicaDb[];
}

export const SProductoRelevamiento = new Schema<IProductoRelevamientoDb>({
    idProducto: { type: Types.ObjectId, ref: 'productos' },
    idEmpresa: { type: Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: Types.ObjectId, ref: 'segmentos' },
    idsSubsegmentos: [{ type: Types.ObjectId, ref: 'subsegmentos' }],
    idsSubsegmentosPropios: [{ type: Types.ObjectId, ref: 'subsegmentosPropios' }],
    composicion: [SComposicion],
    numeroRegistro: { type: String },
});

SProductoRelevamiento.virtual('producto', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProducto',
    ref: 'productos',
});

SProductoRelevamiento.virtual('empresa', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEmpresa',
    ref: 'empresas',
});

SProductoRelevamiento.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});

SProductoRelevamiento.virtual('subsegmentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSubsegmentos',
    ref: 'subsegmentos',
});

SProductoRelevamiento.virtual('subsegmentosPropios', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSubsegmentosPropios',
    ref: 'subsegmentosPropios',
});
