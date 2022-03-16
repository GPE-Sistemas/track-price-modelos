import { Document, Schema, Types } from 'mongoose';
export interface IEmpresaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    propia: boolean;
    empresa: string;
    color: string;
}
export declare const SEmpresa: Schema<IEmpresaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=empresa.d.ts.map