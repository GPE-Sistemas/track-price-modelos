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
    cliente?: IClienteDb;
}
export declare const SUsuario: Schema<IUsuarioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=usuario.d.ts.map