"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SProvincia = void 0;
const mongoose_1 = require("mongoose");
exports.SProvincia = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idRegion: { type: mongoose_1.Types.ObjectId, ref: 'regiones' },
});
exports.SProvincia.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
