"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPrincipioActivo = void 0;
const mongoose_1 = require("mongoose");
exports.SPrincipioActivo = new mongoose_1.Schema({
    nombre: { type: String },
    nombreCorto: { type: String },
    idFamiliaQuimica: { type: mongoose_1.Types.ObjectId, ref: 'familiasQuimicas' },
});
exports.SPrincipioActivo.virtual('familiaQuimica', {
    foreignField: '_id',
    justOne: true,
    localField: 'idFamiliaQuimica',
    ref: 'familiasQuimicas',
});
