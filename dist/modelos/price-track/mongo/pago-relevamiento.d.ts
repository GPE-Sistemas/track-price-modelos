import { Document, Schema } from 'mongoose';
export interface IPagoRelevamientoDb extends Document {
    precioU$S: number;
    plazoDias: number;
    metodos: string[];
    tasa: number;
    volumen: number;
}
export declare const SPagoRelevamiento: Schema<IPagoRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=pago-relevamiento.d.ts.map