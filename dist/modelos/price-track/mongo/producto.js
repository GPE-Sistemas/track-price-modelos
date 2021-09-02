"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SProducto = void 0;
const mongoose_1 = require("mongoose");
const composicion_1 = require("./composicion");
exports.SProducto = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    idEmpresa: { type: mongoose_1.Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: mongoose_1.Types.ObjectId, ref: 'segmentos' },
    idsSubsegmento: [{ type: mongoose_1.Types.ObjectId, ref: 'subsegmentos' }],
    composicion: [composicion_1.SComposicion],
    sku: { type: String },
    tipo: { type: String },
    unidad: { type: String },
    idsCompetencias: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsComplementos: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
    idsSustitutos: [{ type: mongoose_1.Types.ObjectId, ref: 'productos' }],
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
