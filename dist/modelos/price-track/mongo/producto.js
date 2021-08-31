"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SProducto = void 0;
const mongoose_1 = require("mongoose");
const composicion_1 = require("./composicion");
exports.SProducto = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idEmpresa: { type: mongoose_1.Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: mongoose_1.Types.ObjectId, ref: 'segmentos' },
    idsSubsegmento: [{ type: mongoose_1.Types.ObjectId, ref: 'subsegmentos' }],
    composicion: [composicion_1.SComposicion],
    sku: { type: String },
    tipo: { type: String },
    unidad: { type: String },
    idsCompetencia: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsAgrupacion: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
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
    localField: 'idsSubsegmento',
    ref: 'subsegmentos',
});
exports.SProducto.virtual('competencia', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsCompetencia',
    ref: 'productos',
});
exports.SProducto.virtual('agrupacion', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsAgrupacion',
    ref: 'productos',
});
