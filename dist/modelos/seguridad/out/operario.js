"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOperarioDTOSwagger = exports.IOperarioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const centro_monitoreo_1 = require("./centro-monitoreo");
exports.IOperarioDTOValidation = joi_1.default.object({
    // Usuario
    activo: joi_1.default.boolean(),
    nombre: joi_1.default.string(),
    dni: joi_1.default.string(),
    idCliente: joi_1.default.string().required(),
    email: joi_1.default.string(),
    pais: joi_1.default.string(),
    telefono: joi_1.default.string(),
    rol: joi_1.default.string(),
    // Operario
    _id: joi_1.default.string(),
    idCentroMonitoreo: joi_1.default.string(),
    //
    centroMonitoreo: centro_monitoreo_1.ICentroMonitoreoDTOValidation,
});
exports.IOperarioDTOSwagger = joi_to_swagger_1.default(exports.IOperarioDTOValidation).swagger;
