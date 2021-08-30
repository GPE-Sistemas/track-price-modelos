"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPagoRelevamientoSwagger = exports.IPagoRelevamientoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IPagoRelevamientoValidation = joi_1.default.object({
    precioU$S: joi_1.default.number(),
    plazoDias: joi_1.default.number(),
    metodos: joi_1.default.array().items(joi_1.default.string()),
    tasa: joi_1.default.number(),
    volumen: joi_1.default.number(),
});
exports.IPagoRelevamientoSwagger = joi_to_swagger_1.default(exports.IPagoRelevamientoValidation).swagger;
