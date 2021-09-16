import { Document, Schema, Types } from 'mongoose';
import { IComposicionDb, ISubsegmentoPropioDb } from '..';
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
    producto?: IProductoDb;
    empresa?: IEmpresaDb;
    segmento?: ISegmentoDb;
    subsegmentos?: ISubsegmentoDb[];
    subsegmentosPropios?: ISubsegmentoPropioDb[];
    principiosActivos?: IPrincipioActivoDb[];
    familiasQuimicas?: IFamiliaQuimicaDb[];
}
export declare const SProductoRelevamiento: Schema<IProductoRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=producto-relevamiento.d.ts.map