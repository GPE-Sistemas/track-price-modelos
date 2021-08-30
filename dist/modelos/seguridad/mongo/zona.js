"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SZona = void 0;
const mongoose_1 = require("mongoose");
exports.SZona = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idsPrioridad: [{ type: mongoose_1.Types.ObjectId, red: 'centroMonitoreos' }],
});
exports.SZona.virtual('centrosMonitoreo', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsPrioridad',
    ref: 'centroMonitoreos',
});
