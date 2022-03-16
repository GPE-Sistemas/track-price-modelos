import { Document, Schema, Types } from 'mongoose';

export interface IEmpresaDb extends Document {
  _id: Types.ObjectId;
  nombre: string;
  propia: boolean;
  empresa: string;
  color: string;
}

export const SEmpresa = new Schema<IEmpresaDb>({
  nombre: { type: String },
  propia: { type: Boolean },
  empresa: { type: String },
  color: { type: String },
});
