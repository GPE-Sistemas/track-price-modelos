"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCiudadano = void 0;
const mongoose_1 = require("mongoose");
exports.SCiudadano = new mongoose_1.Schema({
    // Usuario
    activo: { type: Boolean, default: false },
    idCliente: { type: mongoose_1.Types.ObjectId },
    nombre: { type: String },
    dni: { type: String },
    sexo: { type: Boolean },
    email: { type: String },
    pais: { type: String },
    telefono: { type: String },
    direccion: { type: String },
    fechaNacimiento: { type: Date },
    rol: { type: String },
    // Ciudadano
    prioridad: { type: Number },
});
