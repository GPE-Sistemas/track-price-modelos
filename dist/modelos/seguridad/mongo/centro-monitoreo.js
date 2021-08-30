"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCentroMonitoreo = void 0;
const mongoose_1 = require("mongoose");
exports.SCentroMonitoreo = new mongoose_1.Schema({
    nombre: { type: String },
    ubicacion: { type: Object },
});
