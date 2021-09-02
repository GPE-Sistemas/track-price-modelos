import { Document, Schema, Types } from 'mongoose';
import { IComposicionDb } from './composicion';
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
    empresa?: IEmpresaDb;
    segmento?: ISegmentoDb;
    subsegmentos?: ISubsegmentoDb[];
    competencias?: IProductoDb[];
    complementos?: IProductoDb[];
    sustitutos?: IProductoDb[];
}
export declare const SProducto: Schema<IProductoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=producto.d.ts.map