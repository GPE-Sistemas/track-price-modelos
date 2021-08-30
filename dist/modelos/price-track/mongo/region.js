"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRegion = void 0;
const mongoose_1 = require("mongoose");
exports.SRegion = new mongoose_1.Schema({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
});
