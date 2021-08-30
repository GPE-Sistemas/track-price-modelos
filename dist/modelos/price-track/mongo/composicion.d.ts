import { Document, Schema, Types } from 'mongoose';
import { IFamiliaQuimicaDb } from './familia-quimica';
import { IPrincipioActivoDb } from './principio-activo';
export interface IComposicionDb extends Document {
    _id: Types.ObjectId;
    idFamiliaQuimica: Types.ObjectId;
    idPrincipioActivo: Types.ObjectId;
    concentracion: number;
    formulacion: string;
    familiaQuimica?: IFamiliaQuimicaDb;
    principioActivo?: IPrincipioActivoDb;
}
export declare const SComposicion: Schema<IComposicionDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=composicion.d.ts.map