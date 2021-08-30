"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOperario = void 0;
const mongoose_1 = require("mongoose");
exports.SOperario = new mongoose_1.Schema({
    // Usuario
    activo: { type: Boolean, default: true },
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
    // Operario
    idCentroMonitoreo: { type: mongoose_1.Types.ObjectId, ref: 'centroMonitoreos' },
});
exports.SOperario.virtual('centroMonitoreo', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCentroMonitoreo',
    ref: 'centroMonitoreos',
});
