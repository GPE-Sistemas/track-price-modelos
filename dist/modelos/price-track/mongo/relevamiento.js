"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRelevamiento = void 0;
const mongoose_1 = require("mongoose");
const pago_relevamiento_1 = require("./pago-relevamiento");
const producto_relevamiento_1 = require("./producto-relevamiento");
const ubicacion_relevamiento_1 = require("./ubicacion-relevamiento");
exports.SRelevamiento = new mongoose_1.Schema({
    fecha: { type: Date },
    campAgricola: { type: String },
    idOperador: { type: mongoose_1.Types.ObjectId, ref: 'operadores' },
    condicionComercial: { type: String },
    fuente: { type: String },
    tipoRelevamiento: { type: String },
    verificado: { type: Boolean },
    observaciones: { type: String },
    disponibilidad: { type: String },
    ubicacion: ubicacion_relevamiento_1.SUbicacionRelevamiento,
    pago: pago_relevamiento_1.SPagoRelevamiento,
    producto: producto_relevamiento_1.SProductoRelevamiento,
});
exports.SRelevamiento.virtual('operador', {
    foreignField: '_id',
    justOne: true,
    localField: 'idOperador',
    ref: 'operadores',
});
