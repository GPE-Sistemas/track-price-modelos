"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLocalidad = void 0;
const mongoose_1 = require("mongoose");
exports.SLocalidad = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idDepartamento: { type: mongoose_1.Types.ObjectId, ref: 'departamentos' },
});
exports.SLocalidad.virtual('departamento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDepartamento',
    ref: 'departamentos',
});
