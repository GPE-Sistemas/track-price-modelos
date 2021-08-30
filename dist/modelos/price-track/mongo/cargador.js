"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCargador = void 0;
const mongoose_1 = require("mongoose");
exports.SCargador = new mongoose_1.Schema({
    // Usuario
    activo: { type: Boolean },
    usuario: { type: String, unique: true, lowercase: true },
    nombre: { type: String },
    apellido: { type: String },
    clave: { type: String },
    idCliente: { type: mongoose_1.Types.ObjectId, required: true },
    dni: { type: String },
    email: { type: String },
    pais: { type: String },
    telefono: { type: String },
    rol: { type: String },
    // Consultor
    idUsuario: { type: mongoose_1.Types.ObjectId },
    idsZona: [{ type: mongoose_1.Types.ObjectId, ref: 'zonas' }],
    idsRegion: [{ type: mongoose_1.Types.ObjectId, ref: 'regiones' }],
    idsProvincia: [{ type: mongoose_1.Types.ObjectId, ref: 'provincias' }],
    idsDepartamento: [{ type: mongoose_1.Types.ObjectId, ref: 'departamentos' }],
    idsLocalidad: [{ type: mongoose_1.Types.ObjectId, ref: 'localidades' }],
    global: { type: Boolean }
});
exports.SCargador.virtual('zonas', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsZona',
    ref: 'zonas',
});
exports.SCargador.virtual('regiones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsRegion',
    ref: 'regiones',
});
exports.SCargador.virtual('provincias', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsProvincia',
    ref: 'provincias',
});
exports.SCargador.virtual('departamentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsDepartamento',
    ref: 'departamentos',
});
exports.SCargador.virtual('localidades', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsLocalidad',
    ref: 'localidades',
});
