import { Document, Schema, Types } from 'mongoose';
export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    admin: boolean;
    activo: boolean;
    nombre: string;
    condicionComercialDefault: string;
}
export declare const SCliente: Schema<IClienteDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=cliente.d.ts.map