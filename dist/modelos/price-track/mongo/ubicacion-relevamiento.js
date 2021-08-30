"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUbicacionRelevamiento = void 0;
const mongoose_1 = require("mongoose");
exports.SUbicacionRelevamiento = new mongoose_1.Schema({
    coordenadas: { type: Object },
    idRegion: { type: mongoose_1.Types.ObjectId, ref: 'regiones' },
    idZona: { type: mongoose_1.Types.ObjectId, ref: 'zonas' },
    idProvincia: { type: mongoose_1.Types.ObjectId, ref: 'provincias' },
    idDepartamento: { type: mongoose_1.Types.ObjectId, ref: 'departamentos' },
    idLocalidad: { type: mongoose_1.Types.ObjectId, ref: 'localidades' },
});
exports.SUbicacionRelevamiento.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
exports.SUbicacionRelevamiento.virtual('zona', {
    foreignField: '_id',
    justOne: true,
    localField: 'idZona',
    ref: 'zonas',
});
exports.SUbicacionRelevamiento.virtual('provincia', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProvincia',
    ref: 'provincias',
});
exports.SUbicacionRelevamiento.virtual('departamento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDepartamento',
    ref: 'departamentos',
});
exports.SUbicacionRelevamiento.virtual('localidad', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLocalidad',
    ref: 'localidades',
});
