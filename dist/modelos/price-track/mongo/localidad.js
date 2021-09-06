"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLocalidad = void 0;
const mongoose_1 = require("mongoose");
exports.SLocalidad = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idDepartamento: { type: mongoose_1.Types.ObjectId, ref: 'departamentos' },
    idProvincia: { type: mongoose_1.Types.ObjectId, ref: 'provincias' },
    idZona: { type: mongoose_1.Types.ObjectId, ref: 'zonas' },
    idRegion: { type: mongoose_1.Types.ObjectId, ref: 'regioes' },
});
exports.SLocalidad.virtual('departamento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDepartamento',
    ref: 'departamentos',
});
exports.SLocalidad.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});
exports.SLocalidad.virtual('provincia', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProvincia',
    ref: 'provincias',
});
exports.SLocalidad.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
