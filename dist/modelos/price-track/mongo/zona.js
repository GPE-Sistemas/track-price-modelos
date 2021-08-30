"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SZona = void 0;
const mongoose_1 = require("mongoose");
exports.SZona = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idRegion: { type: mongoose_1.Types.ObjectId, ref: 'regiones' },
});
exports.SZona.virtual('region', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRegion',
    ref: 'regiones',
});
