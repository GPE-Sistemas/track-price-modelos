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
    composicion: [composicion_1.SComposicion]
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
