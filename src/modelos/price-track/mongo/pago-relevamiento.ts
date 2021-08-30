import { Document, Schema, Types } from 'mongoose';

export interface IPagoRelevamientoDb extends Document {
    precioU$S: number;
    plazoDias: number;
    metodos: string[];
    tasa: number;
    volumen: number;
}

export const SPagoRelevamiento = new Schema<IPagoRelevamientoDb>({
    precioU$S: { type: Number },
    plazoDias: { type: Number },
    metodos: [{ type: String }],
    tasa: { type: Number },
    volumen: { type: Number },
});
