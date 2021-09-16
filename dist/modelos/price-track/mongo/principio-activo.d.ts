import { Document, Schema, Types } from 'mongoose';
import { IFamiliaQuimicaDb } from './familia-quimica';
export interface IPrincipioActivoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    nombreCorto: string;
    idFamiliaQuimica: Types.ObjectId;
    familiaQuimica?: IFamiliaQuimicaDb;
}
export declare const SPrincipioActivo: Schema<IPrincipioActivoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=principio-activo.d.ts.map