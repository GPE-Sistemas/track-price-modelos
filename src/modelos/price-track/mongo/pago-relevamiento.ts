import { Document, Schema, Types } from 'mongoose';

export interface IPagoRelevamientoDb extends Document {
    precioFinalU$S?: number; // Es la suma de precioFinalU$S de todos los metodos
    precioContadoU$S?: number; // Es la suma de precioContadoU$S de todos los metodos
    volumen?: number;
    metodos?: {
        metodo?: string; // Contado, Tarjeta, Canje, Etc
        plazoDias?: number;
        tasaMensual?: number; // En porcentaje
        tarjeta?: string; // Solo si metodo es tarjeta
        diasLibres?: number; // Solo si metodo es tarjeta
        plusCanje?: number; // Solo si el metodo es canje
        comisionCanje?: number; // Solo si el metodo es canje
        precioFinalU$S?: number; // Precio relevado
        precioContadoU$S?: number; // Precio calculado
        porcentajePago?: number; // Entre todos los metodos debe sumar 100
    }[];
}

export const SPagoRelevamiento = new Schema<IPagoRelevamientoDb>({
    precioFinalU$S: { type: Number },
    precioContadoU$S: { type: Number },
    volumen: { type: Number },
    metodos: [{ type: Object }],
});
