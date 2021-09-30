"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPagoRelevamiento = void 0;
const mongoose_1 = require("mongoose");
exports.SPagoRelevamiento = new mongoose_1.Schema({
    precioFinalU$S: { type: Number },
    precioContadoU$S: { type: Number },
    volumen: { type: Number },
    metodos: [{ type: Object }],
});
