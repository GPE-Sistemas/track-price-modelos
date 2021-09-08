import { Document, Schema, Types } from 'mongoose';
import { IOperadorDb } from './operador';
import { IPagoRelevamientoDb } from './pago-relevamiento';
import { IProductoRelevamientoDb } from './producto-relevamiento';
import { IUbicacionRelevamientoDb } from './ubicacion-relevamiento';
export interface IRelevamientoDb extends Document {
    _id: Types.ObjectId;
    fecha: Date;
    campAgricola: string;
    idUsuario: Types.ObjectId;
    condicionComercial: string;
    fuente: string;
    tipoRelevamiento: string;
    verificado: boolean;
    observaciones: string;
    disponibilidad: string;
    ubicacion: IUbicacionRelevamientoDb;
    pago: IPagoRelevamientoDb;
    producto: IProductoRelevamientoDb;
    operador?: IOperadorDb;
}
export declare const SRelevamiento: Schema<IRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=relevamiento.d.ts.map