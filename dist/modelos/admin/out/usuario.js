"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUsuarioDTOSwagger = exports.IUsuarioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const cliente_1 = require("./cliente");
exports.IUsuarioDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    activo: joi_1.default.boolean(),
    usuario: joi_1.default.string(),
    nombre: joi_1.default.string(),
    apellido: joi_1.default.string(),
    // clave: joi.string(),
    idCliente: joi_1.default.string(),
    dni: joi_1.default.string(),
    email: joi_1.default.string(),
    pais: joi_1.default.string(),
    telefono: joi_1.default.string(),
    rol: joi_1.default.string().allow('admin', 'consultor', 'cargador'),
    //
    cliente: cliente_1.IClienteDTOValidation,
});
exports.IUsuarioDTOSwagger = joi_to_swagger_1.default(exports.IUsuarioDTOValidation).swagger;
