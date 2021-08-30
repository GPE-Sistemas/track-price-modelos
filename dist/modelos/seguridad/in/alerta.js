"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaSwagger = exports.IAlertaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.IAlertaValidation = joi_1.default.object({
    activa: joi_1.default.boolean(),
    idCiudadano: joi_1.default.string(),
    ubicacion: shared_1.ICoordenadasValidation,
    estadoActual: joi_1.default.string(),
    fechaCreacion: joi_1.default.date(),
    idsCentroMonitoreo: joi_1.default.array().items(joi_1.default.string()),
    estados: joi_1.default.array(),
    tiempoRespuesta: joi_1.default.number(),
    idOperarioActual: joi_1.default.string(),
    idZona: joi_1.default.string(),
});
exports.IAlertaSwagger = joi_to_swagger_1.default(exports.IAlertaValidation).swagger;
