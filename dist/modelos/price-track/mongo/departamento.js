"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDepartamento = void 0;
const mongoose_1 = require("mongoose");
exports.SDepartamento = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idZona: { type: mongoose_1.Types.ObjectId, ref: 'zonas' },
    idProvincia: { type: mongoose_1.Types.ObjectId, ref: 'provincias' },
    idRegion: { type: mongoose_1.Types.ObjectId, ref: 'regioes' },
});
exports.SDepartamento.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});
exports.SDepartamento.virtual('provincia', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProvincia',
    ref: 'provincias',
});
exports.SDepartamento.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
