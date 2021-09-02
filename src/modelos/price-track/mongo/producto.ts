import { Document, Schema, Types } from 'mongoose';
import { IComposicionDb, SComposicion } from './composicion';
import { IEmpresaDb } from './empresa';
import { ISegmentoDb } from './segmento';
import { ISubsegmentoDb } from './subsegmento';

export interface IProductoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEmpresa: Types.ObjectId;
    idSegmento: Types.ObjectId;
    idsSubsegmento: Types.ObjectId[];
    composicion?: IComposicionDb[];
    sku: string;
    tipo: string;
    unidad: string;
    idsCompetencias: Types.ObjectId[];
    idsComplementos: Types.ObjectId[];
    idsSustitutos: Types.ObjectId[];
    //
    empresa?: IEmpresaDb;
    segmento?: ISegmentoDb;
    subsegmentos?: ISubsegmentoDb[];
    competencias?: IProductoDb[];
    complementos?: IProductoDb[];
    sustitutos?: IProductoDb[];
}

export const SProducto = new Schema<IProductoDb>({
    nombre: { type: String, required: true },
    idEmpresa: { type: Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: Types.ObjectId, ref: 'segmentos' },
    idsSubsegmento: [{ type: Types.ObjectId, ref: 'subsegmentos' }],
    composicion: [SComposicion],
    sku: { type: String },
    tipo: { type: String },
    unidad: { type: String },
    idsCompetencias: [{ type: Types.ObjectId, ref: 'productos' }],
    idsComplementos: [{ type: Types.ObjectId, ref: 'productos' }],
    idsSustitutos: [{ type: Types.ObjectId, ref: 'productos' }],
});

SProducto.virtual('empresa', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEmpresa',
    ref: 'empresas',
});

SProducto.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});

SProducto.virtual('subsegmentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSubsegmento',
    ref: 'subsegmentos',
});

SProducto.virtual('competencias', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsCompetencias',
    ref: 'productos',
});

SProducto.virtual('complementos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsComplementos',
    ref: 'productos',
});

SProducto.virtual('sustitutos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSustitutos',
    ref: 'productos',
});
