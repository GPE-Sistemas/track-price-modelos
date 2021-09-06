import { Document, Schema, Types } from 'mongoose';

export interface IPagoRelevamientoDb extends Document {
    precioFinalU$S?: number;
    precioContadoU$S?: number;
    plazoDias?: number;
    metodos?: string[];
    tarjeta?: string;
    comisionTarjeta?: number;
    tasaMensual?: number;
    volumen?: number;
    plusCanje?: number;
    comisionCanje?: number;
}

export const SPagoRelevamiento = new Schema<IPagoRelevamientoDb>({
    precioFinalU$S: { type: Number },
    precioContadoU$S: { type: Number },
    plazoDias: { type: Number },
    metodos: [{ type: String }],
    tarjeta: { type: String },
    comisionTarjeta: { type: Number },
    tasaMensual: { type: Number },
    volumen: { type: Number },
    plusCanje: { type: Number },
    comisionCanje: { type: Number },
});
