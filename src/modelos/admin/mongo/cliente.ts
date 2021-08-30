import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';

export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    admin: boolean;
    activo: boolean;
    nombre: string;
}

export const SCliente = new Schema<IClienteDb>({
    admin: { type: Boolean },
    activo: { type: Boolean },
    nombre: { type: String, required: true, unique: true },
});
