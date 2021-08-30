import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IRegionDb } from './region';
export interface IZonaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: Types.ObjectId;
    region?: IRegionDb;
}
export declare const SZona: Schema<IZonaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=zona.d.ts.map