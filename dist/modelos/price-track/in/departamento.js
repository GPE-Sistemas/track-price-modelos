"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDepartamentoSwagger = exports.IDepartamentoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.IDepartamentoValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    coordenadas: joi_1.default.array().items(shared_1.ICoordenadasValidation),
    idProvincia: joi_1.default.string(),
    idZona: joi_1.default.string(),
});
exports.IDepartamentoSwagger = joi_to_swagger_1.default(exports.IDepartamentoValidation).swagger;
