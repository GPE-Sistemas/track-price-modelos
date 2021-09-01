"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUsuarioSwagger = exports.IUsuarioValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IUsuarioValidation = joi_1.default.object({
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
    rol: joi_1.default.string().allow('admin', 'consultor', 'relevador'),
});
exports.IUsuarioSwagger = joi_to_swagger_1.default(exports.IUsuarioValidation).swagger;
