"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPagoRelevamientoDTOSwagger = exports.IPagoRelevamientoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IPagoRelevamientoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    precioContadoU$S: joi_1.default.number(),
    plazoDias: joi_1.default.number(),
    metodos: joi_1.default.array().items(joi_1.default.string()),
    tarjeta: joi_1.default.string(),
    tasaMensual: joi_1.default.number(),
    comisionTarjeta: joi_1.default.number(),
    volumen: joi_1.default.number(),
    plusCanje: joi_1.default.number(),
    comisionCanje: joi_1.default.number(),
});
exports.IPagoRelevamientoDTOSwagger = joi_to_swagger_1.default(exports.IPagoRelevamientoDTOValidation).swagger;
