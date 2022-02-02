import { Document, Schema, Types } from "mongoose";
import { IProductoDb } from "./producto";

export interface IGrupoComparativoDb extends Document {
  _id: Types.ObjectId;
  fecha: Date;
  nombre: string;
  idProductos: Types.ObjectId[];
  productos: IProductoDb[];
}

export const SGrupoComparativo = new Schema<IGrupoComparativoDb>({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true, default: Date.now },
  idProductos: [{ type: Types.ObjectId, ref: "productos" }],
});

SGrupoComparativo.virtual("productos", {
  foreignField: "_id",
  localField: "idProductos",
  justOne: false,
  ref: "productos",
});
