"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGrupoComparativoDTOSwagger = exports.IGrupoComparativoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IGrupoComparativoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    fecha: joi_1.default.string(),
    idProductos: joi_1.default.array().items(joi_1.default.string()),
    productos: joi_1.default.array().items(joi_1.default.string()),
});
exports.IGrupoComparativoDTOSwagger = joi_to_swagger_1.default(exports.IGrupoComparativoDTOValidation).swagger;
