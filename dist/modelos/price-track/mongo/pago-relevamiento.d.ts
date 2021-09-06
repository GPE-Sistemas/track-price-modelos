import { Document, Schema } from 'mongoose';
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
export declare const SPagoRelevamiento: Schema<IPagoRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=pago-relevamiento.d.ts.map