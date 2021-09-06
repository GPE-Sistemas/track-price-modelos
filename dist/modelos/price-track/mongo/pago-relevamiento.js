"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPagoRelevamiento = void 0;
const mongoose_1 = require("mongoose");
exports.SPagoRelevamiento = new mongoose_1.Schema({
    precioFinalU$S: { type: Number },
    precioContadoU$S: { type: Number },
    plazoDias: { type: Number },
    metodos: [{ type: String }],
    tarjeta: { type: String },
    comisionTarjeta: { type: Number },
    tasaMensual: { type: Number },
    volumen: { type: Number },
    plusCanje: { type: Number },
    comisionCanje: { type: Number },
});
