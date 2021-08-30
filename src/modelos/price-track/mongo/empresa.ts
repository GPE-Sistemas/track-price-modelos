import { Document, Schema, Types } from 'mongoose';

export interface IEmpresaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    propia: boolean;
}

export const SEmpresa = new Schema<IEmpresaDb>({
    nombre: { type: String },
    propia: { type: Boolean },
});
