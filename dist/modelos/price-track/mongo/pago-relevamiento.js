"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPagoRelevamiento = void 0;
const mongoose_1 = require("mongoose");
exports.SPagoRelevamiento = new mongoose_1.Schema({
    precioU$S: { type: Number },
    plazoDias: { type: Number },
    metodos: [{ type: String }],
    tasa: { type: Number },
    volumen: { type: Number },
});
