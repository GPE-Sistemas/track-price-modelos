import { Document, Schema, Types } from 'mongoose';
export interface IFamiliaQuimicaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}
export declare const SFamiliaQuimica: Schema<IFamiliaQuimicaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=familia-quimica.d.ts.map