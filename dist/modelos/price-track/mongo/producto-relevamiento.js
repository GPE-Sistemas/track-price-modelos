"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SProductoRelevamiento = void 0;
const mongoose_1 = require("mongoose");
exports.SProductoRelevamiento = new mongoose_1.Schema({
    idProducto: { type: mongoose_1.Types.ObjectId, ref: 'productos' },
    idEmpresa: { type: mongoose_1.Types.ObjectId, ref: 'empresas' },
    idSegmento: { type: mongoose_1.Types.ObjectId, ref: 'segmentos' },
    idsSubsegmentos: [{ type: mongoose_1.Types.ObjectId, ref: 'subsegmentos' }],
    idsPrincipiosActivos: [{ type: mongoose_1.Types.ObjectId, ref: 'principiosActivos' }],
    idsFamiliaQuimica: [{ type: mongoose_1.Types.ObjectId, ref: 'familiasQuimicas' }],
});
exports.SProductoRelevamiento.virtual('producto', {
    foreignField: '_id',
    justOne: true,
    localField: 'idProducto',
    ref: 'productos',
});
exports.SProductoRelevamiento.virtual('empresa', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEmpresa',
    ref: 'empresas',
});
exports.SProductoRelevamiento.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});
exports.SProductoRelevamiento.virtual('subsegmentos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsSubsegmentos',
    ref: 'subsegmentos',
});
exports.SProductoRelevamiento.virtual('principiosActivos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsPrincipiosActivos',
    ref: 'principiosActivos',
});
exports.SProductoRelevamiento.virtual('familiasQuimicas', {
    foreignField: '_id',
    justOne: false,
    localField: 'idsFamiliaQuimica',
    ref: 'familiasQuimicas',
});
