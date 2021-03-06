"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SProducto = void 0;
const mongoose_1 = require("mongoose");
const composicion_1 = require("./composicion");
exports.SProducto = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idEmpresa: { type: mongoose_1.Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: mongoose_1.Types.ObjectId, ref: 'segmentos' },
    idsSubsegmentos: [{ type: mongoose_1.Types.ObjectId, ref: 'subsegmentos' }],
    idsSubsegmentosPropios: [{ type: mongoose_1.Types.ObjectId, ref: 'subsegmentosPropios' }],
    composicion: [composicion_1.SComposicion],
    sku: { type: String },
    numeroRegistro: { type: String },
    tipo: { type: String },
    unidad: { type: String },
    formulacion: { type: String },
    toxicidad: { type: String },
    dosisMedia: { type: Number },
    idsCompetencias: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsComplementos: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsSustitutos: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsAgrupacion1: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsAgrupacion2: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
});
exports.SProducto.virtual('empresa', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEmpresa',
    ref: 'empresas',
});
exports.SProducto.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});
exports.SProducto.virtual('subsegmentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSubsegmentos',
    ref: 'subsegmentos',
});
exports.SProducto.virtual('subsegmentosPropios', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSubsegmentosPropios',
    ref: 'subsegmentosPropios',
});
exports.SProducto.virtual('competencias', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsCompetencias',
    ref: 'productos',
});
exports.SProducto.virtual('complementos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsComplementos',
    ref: 'productos',
});
exports.SProducto.virtual('sustitutos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSustitutos',
    ref: 'productos',
});
exports.SProducto.virtual('agrupacion1', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsAgrupacion1',
    ref: 'productos',
});
exports.SProducto.virtual('agrupacion2', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsAgrupacion2',
    ref: 'productos',
});
