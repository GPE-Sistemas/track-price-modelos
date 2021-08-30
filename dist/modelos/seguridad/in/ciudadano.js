"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICiudadanoSwagger = exports.ICiudadanoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.ICiudadanoValidation = joi_1.default.object({
    // Usuario
    activo: joi_1.default.boolean(),
    nombre: joi_1.default.string(),
    dni: joi_1.default.string(),
    idCliente: joi_1.default.string(),
    email: joi_1.default.string(),
    pais: joi_1.default.string(),
    telefono: joi_1.default.string(),
    rol: joi_1.default.string().allow('ciudadano'),
    // Ciudadano
    prioridad: joi_1.default.number(),
});
exports.ICiudadanoSwagger = joi_to_swagger_1.default(exports.ICiudadanoValidation).swagger;
