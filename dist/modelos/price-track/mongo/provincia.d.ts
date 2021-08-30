import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IRegionDb } from './region';
export interface IProvinciaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: Types.ObjectId;
    region?: IRegionDb;
}
export declare const SProvincia: Schema<IProvinciaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=provincia.d.ts.map