"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSubsegmentoPropio = void 0;
const mongoose_1 = require("mongoose");
exports.SSubsegmentoPropio = new mongoose_1.Schema({
    nombre: { type: String },
    idSegmento: { type: mongoose_1.Types.ObjectId, ref: 'segmentos' },
});
exports.SSubsegmentoPropio.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});
