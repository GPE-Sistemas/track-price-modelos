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
    //
    empresa?: IEmpresaDb;
    segmento?: ISegmentoDb;
    subsegmentos?: ISubsegmentoDb[];
}

export const SProducto = new Schema<IProductoDb>({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idEmpresa: { type: Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: Types.ObjectId, ref: 'segmentos' },
    idsSubsegmento: [{ type: Types.ObjectId, ref: 'subsegmentos' }],
    composicion: [SComposicion]
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