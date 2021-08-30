import { Document, Schema, Types } from 'mongoose';
import { ICargadorDb } from './cargador';
import { IPagoRelevamientoDb, SPagoRelevamiento } from './pago-relevamiento';
import { IProductoRelevamientoDb, SProductoRelevamiento } from './producto-relevamiento';
import { IUbicacionRelevamientoDb, SUbicacionRelevamiento } from './ubicacion-relevamiento';

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
    //
    cargador?: ICargadorDb;
}

export const SRelevamiento = new Schema<IRelevamientoDb>({
    fecha: { type: Date },
    campAgricola: { type: String },
    idCargador: { type: Types.ObjectId },
    condicionComercial: { type: String },
    fuente: { type: String },
    tipoRelevamiento: { type: String },
    verificado: { type: Boolean },
    observaciones: { type: String },
    disponibilidad: { type: String },
    ubicacion: SUbicacionRelevamiento,
    pago: SPagoRelevamiento,
    producto: SProductoRelevamiento,
});

SRelevamiento.virtual('cargador', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCargador',
    ref: 'cargadores',
});
