"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SComposicion = void 0;
const mongoose_1 = require("mongoose");
exports.SComposicion = new mongoose_1.Schema({
    idFamiliaQuimica: { type: mongoose_1.Types.ObjectId, ref: 'familiasQuimicas' },
    idPrincipioActivo: { type: mongoose_1.Types.ObjectId, ref: 'principiosActivos' },
    concentracion: { type: Number },
    formulacion: { type: String },
    claseTox: { type: String },
    unidad: { type: String },
});
exports.SComposicion.virtual('familiaQuimica', {
    foreignField: '_id',
    justOne: true,
    localField: 'idFamiliaQuimica',
    ref: 'familiasQuimicas',
});
exports.SComposicion.virtual('principioActivo', {
    foreignField: '_id',
    justOne: true,
    localField: 'idPrincipioActivo',
    ref: 'principiosActivos',
});
