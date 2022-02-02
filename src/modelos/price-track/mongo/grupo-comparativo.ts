import { Document, Schema, Types } from "mongoose";

export interface IGrupoComparativoDb extends Document {
  _id: Types.ObjectId;
  nombre: string;
  productos: Types.ObjectId[];
}

export const SGrupoComparativo = new Schema<IGrupoComparativoDb>({
  nombre: { type: String, required: true },
  productos: [{ type: Types.ObjectId, ref: "productos" }],
});
