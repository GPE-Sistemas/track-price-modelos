"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAlertaDTOSwagger = exports.IAlertaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const centro_monitoreo_1 = require("./centro-monitoreo");
const ciudadano_1 = require("./ciudadano");
const operario_1 = require("./operario");
const zona_1 = require("./zona");
exports.IAlertaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
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
    //
    zona: zona_1.IZonaDTOValidation,
    operario: operario_1.IOperarioDTOValidation,
    ciudadano: ciudadano_1.ICiudadanoDTOValidation,
    centrosMonitoreo: joi_1.default.array().items(centro_monitoreo_1.ICentroMonitoreoDTOValidation)
});
exports.IAlertaDTOSwagger = joi_to_swagger_1.default(exports.IAlertaDTOValidation).swagger;
