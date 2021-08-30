"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConsultorSwagger = exports.IConsultorValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IConsultorValidation = joi_1.default.object({
    // Usuario
    activo: joi_1.default.boolean(),
    usuario: joi_1.default.string(),
    nombre: joi_1.default.string(),
    apellido: joi_1.default.string(),
    clave: joi_1.default.string(),
    idCliente: joi_1.default.string(),
    dni: joi_1.default.string(),
    email: joi_1.default.string(),
    pais: joi_1.default.string(),
    telefono: joi_1.default.string(),
    rol: joi_1.default.string().allow('consultor'),
    // Consultor
    idUsuario: joi_1.default.string(),
    idsZona: joi_1.default.array().items(joi_1.default.string()),
    idsRegion: joi_1.default.array().items(joi_1.default.string()),
    idsProvincia: joi_1.default.array().items(joi_1.default.string()),
    idsDepartamento: joi_1.default.array().items(joi_1.default.string()),
    idsLocalidad: joi_1.default.array().items(joi_1.default.string()),
    global: joi_1.default.boolean(),
});
exports.IConsultorSwagger = joi_to_swagger_1.default(exports.IConsultorValidation).swagger;
