"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRelevamientoDTOSwagger = exports.IRelevamientoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const operador_1 = require("./operador");
const pago_relevamiento_1 = require("./pago-relevamiento");
const producto_relevamiento_1 = require("./producto-relevamiento");
const ubicacion_relevamiento_1 = require("./ubicacion-relevamiento");
exports.IRelevamientoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    fecha: joi_1.default.string(),
    campAgricola: joi_1.default.string(),
    idOperador: joi_1.default.string(),
    condicionComercial: joi_1.default.string(),
    fuente: joi_1.default.string(),
    tipoRelevamiento: joi_1.default.string(),
    verificado: joi_1.default.boolean(),
    observaciones: joi_1.default.string(),
    disponibilidad: joi_1.default.string(),
    ubicacion: ubicacion_relevamiento_1.IUbicacionRelevamientoDTOValidation,
    pago: pago_relevamiento_1.IPagoRelevamientoDTOValidation,
    producto: producto_relevamiento_1.IProductoRelevamientoDTOValidation,
    //
    operador: operador_1.IOperadorDTOValidation
});
exports.IRelevamientoDTOSwagger = joi_to_swagger_1.default(exports.IRelevamientoDTOValidation).swagger;
