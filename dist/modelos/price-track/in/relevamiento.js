"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRelevamientoSwagger = exports.IRelevamientoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const pago_relevamiento_1 = require("./pago-relevamiento");
const producto_relevamiento_1 = require("./producto-relevamiento");
const ubicacion_relevamiento_1 = require("./ubicacion-relevamiento");
exports.IRelevamientoValidation = joi_1.default.object({
    fecha: joi_1.default.string(),
    campAgricola: joi_1.default.string(),
    idUsuario: joi_1.default.string(),
    condicionComercial: joi_1.default.string().allow('', null),
    fuente: joi_1.default.string().allow('', null),
    tipoRelevamiento: joi_1.default.string().allow('', null),
    verificado: joi_1.default.boolean(),
    observaciones: joi_1.default.string().allow('', null),
    disponibilidad: joi_1.default.string().allow('', null),
    ubicacion: ubicacion_relevamiento_1.IUbicacionRelevamientoValidation,
    pago: pago_relevamiento_1.IPagoRelevamientoValidation,
    producto: producto_relevamiento_1.IProductoRelevamientoValidation,
});
exports.IRelevamientoSwagger = (0, joi_to_swagger_1.default)(exports.IRelevamientoValidation).swagger;
