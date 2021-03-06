"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOperador = void 0;
const mongoose_1 = require("mongoose");
exports.SOperador = new mongoose_1.Schema({
    // Usuario
    activo: { type: Boolean },
    usuario: { type: String, required: true, unique: true, lowercase: true },
    nombre: { type: String },
    apellido: { type: String },
    // clave: { type: String },
    // idCliente: { type: Types.ObjectId }, // Id de la db de administracion
    dni: { type: String },
    email: { type: String },
    pais: { type: String },
    telefono: { type: String },
    rol: { type: String },
    // Operador
    idUsuario: { type: mongoose_1.Types.ObjectId, required: true, unique: true },
    idsZona: [{ type: mongoose_1.Types.ObjectId, ref: 'zonas' }],
    idsRegion: [{ type: mongoose_1.Types.ObjectId, ref: 'regiones' }],
    idsProvincia: [{ type: mongoose_1.Types.ObjectId, ref: 'provincias' }],
    idsDepartamento: [{ type: mongoose_1.Types.ObjectId, ref: 'departamentos' }],
    idsLocalidad: [{ type: mongoose_1.Types.ObjectId, ref: 'localidades' }],
    global: { type: Boolean }
});
exports.SOperador.virtual('zonas', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsZona',
    ref: 'zonas',
});
exports.SOperador.virtual('regiones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsRegion',
    ref: 'regiones',
});
exports.SOperador.virtual('provincias', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsProvincia',
    ref: 'provincias',
});
exports.SOperador.virtual('departamentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsDepartamento',
    ref: 'departamentos',
});
exports.SOperador.virtual('localidades', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsLocalidad',
    ref: 'localidades',
});
