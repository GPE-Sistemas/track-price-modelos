"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCliente = void 0;
const mongoose_1 = require("mongoose");
exports.SCliente = new mongoose_1.Schema({
    admin: { type: Boolean },
    activo: { type: Boolean },
    nombre: { type: String, required: true, unique: true },
});
