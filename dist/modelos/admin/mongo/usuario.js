"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUsuario = void 0;
const mongoose_1 = require("mongoose");
exports.SUsuario = new mongoose_1.Schema({
    activo: { type: Boolean },
    usuario: { type: String, required: true, unique: true, lowercase: true },
    nombre: { type: String },
    apellido: { type: String },
    clave: { type: String },
    idCliente: { type: mongoose_1.Types.ObjectId, required: true, ref: 'clientes' },
    dni: { type: String },
    email: { type: String },
    pais: { type: String },
    telefono: { type: String },
    rol: { type: String },
});
exports.SUsuario.virtual('cliente', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCliente',
    ref: 'clientes',
});
