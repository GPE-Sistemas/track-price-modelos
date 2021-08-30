import { Document, Schema, Types } from 'mongoose';
import { IClienteDb } from './cliente';

export interface IUsuarioDb extends Document {
    _id: Types.ObjectId;
    activo: boolean;
    usuario: string;
    nombre: string;
    apellido: string;
    clave: string;
    idCliente: Types.ObjectId;
    dni: string;
    email: string;
    pais: string;
    telefono: string;
    rol: string;
    //
    cliente?: IClienteDb;
}

export const SUsuario = new Schema<IUsuarioDb>({
    activo: { type: Boolean },
    usuario: { type: String, unique: true, lowercase: true},
    nombre: { type: String },
    apellido: { type: String },
    clave: { type: String },
    idCliente: { type: Types.ObjectId, required: true, ref: 'clientes' },
    dni: { type: String },
    email: { type: String },
    pais: { type: String },
    telefono: { type: String },
    rol: { type: String },
});

SUsuario.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
