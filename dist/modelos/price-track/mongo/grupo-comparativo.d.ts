import { Document, Schema, Types } from "mongoose";
import { IProductoDb } from "./producto";
export interface IGrupoComparativoDb extends Document {
    _id: Types.ObjectId;
    fecha: Date;
    nombre: string;
    idProductos: Types.ObjectId[];
    productos: IProductoDb[];
}
export declare const SGrupoComparativo: Schema<IGrupoComparativoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=grupo-comparativo.d.ts.map