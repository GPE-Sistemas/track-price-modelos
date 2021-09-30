import { Document, Schema } from 'mongoose';
export interface IPagoRelevamientoDb extends Document {
    precioFinalU$S?: number;
    precioContadoU$S?: number;
    volumen?: number;
    metodos?: {
        metodo?: string;
        plazoDias?: number;
        tasaMensual?: number;
        tarjeta?: string;
        diasLibres?: number;
        plusCanje?: number;
        comisionCanje?: number;
        precioFinalU$S?: number;
        precioContadoU$S?: number;
        porcentajePago?: number;
    }[];
}
export declare const SPagoRelevamiento: Schema<IPagoRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=pago-relevamiento.d.ts.map