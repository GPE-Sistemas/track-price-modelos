import { Document, Schema, Types } from 'mongoose';

export interface IFamiliaQuimicaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
}

export const SFamiliaQuimica = new Schema<IFamiliaQuimicaDb>({
    nombre: { type: String },
});
