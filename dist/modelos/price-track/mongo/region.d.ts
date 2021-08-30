import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
export interface IRegionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
}
export declare const SRegion: Schema<IRegionDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=region.d.ts.map