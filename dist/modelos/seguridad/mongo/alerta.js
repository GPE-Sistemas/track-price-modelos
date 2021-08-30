"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAlerta = void 0;
const mongoose_1 = require("mongoose");
exports.SAlerta = new mongoose_1.Schema({
    activa: { type: Boolean, default: true },
    idCiudadano: { type: mongoose_1.Types.ObjectId, ref: 'ciudadanos' },
    ubicacion: { type: Object },
    estadoActual: { type: String },
    fechaCreacion: { type: Date },
    idsCentroMonitoreo: [{ type: mongoose_1.Types.ObjectId, ref: 'centroMonitoreos' }],
    estados: [{ type: Object }],
    tiempoRespuesta: { type: Number },
    idOperarioActual: { type: mongoose_1.Types.ObjectId, ref: 'operarios' },
    idZona: { type: mongoose_1.Types.ObjectId, ref: 'zonas' },
});
exports.SAlerta.index({ activa: 1, idsCentroMonitoreo: 1, fechaCreacion: 1 });
exports.SAlerta.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});
exports.SAlerta.virtual('operario', {
    foreignField: '_id',
    justOne: true,
    localField: 'idOperarioActual',
    ref: 'operarios',
});
exports.SAlerta.virtual('ciudadano', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCiudadano',
    ref: 'ciudadanos',
});
exports.SAlerta.virtual('centrosMonitoreo', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsCentroMonitoreo',
    ref: 'centroMonitoreos',
});
