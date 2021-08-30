"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSubsegmento = void 0;
const mongoose_1 = require("mongoose");
exports.SSubsegmento = new mongoose_1.Schema({
    nombre: { type: String },
    idSegmento: { type: mongoose_1.Types.ObjectId, ref: 'segmentos' },
});
exports.SSubsegmento.virtual('segmento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSegmento',
    ref: 'segmentos',
});
