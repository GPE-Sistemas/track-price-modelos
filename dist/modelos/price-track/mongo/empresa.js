"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEmpresa = void 0;
const mongoose_1 = require("mongoose");
exports.SEmpresa = new mongoose_1.Schema({
    nombre: { type: String },
    propia: { type: Boolean },
    empresa: { type: String },
    color: { type: String },
});
