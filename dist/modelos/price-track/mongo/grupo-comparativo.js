"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGrupoComparativo = void 0;
const mongoose_1 = require("mongoose");
exports.SGrupoComparativo = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    fecha: { type: Date, required: true, default: Date.now },
    idProductos: [{ type: mongoose_1.Types.ObjectId, ref: "productos" }],
});
exports.SGrupoComparativo.virtual("productos", {
    foreignField: "_id",
    localField: "idProductos",
    justOne: false,
    ref: "productos",
});
