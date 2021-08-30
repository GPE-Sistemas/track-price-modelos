import { Document, Schema, Types } from 'mongoose';
import { ICargadorDb } from './cargador';
import { IPagoRelevamientoDb } from './pago-relevamiento';
import { IProductoRelevamientoDb } from './producto-relevamiento';
import { IUbicacionRelevamientoDb } from './ubicacion-relevamiento';
export interface IRelevamientoDb extends Document {
    _id: Types.ObjectId;
    fecha: Date;
    campAgricola: string;
    idCargador: Types.ObjectId;
    condicionComercial: string;
    fuente: string;
    tipoRelevamiento: string;
    verificado: boolean;
    observaciones: string;
    disponibilidad: string;
    ubicacion: IUbicacionRelevamientoDb;
    pago: IPagoRelevamientoDb;
    producto: IProductoRelevamientoDb;
    cargador?: ICargadorDb;
}
export declare const SRelevamiento: Schema<IRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=relevamiento.d.ts.map