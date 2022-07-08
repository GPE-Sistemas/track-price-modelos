"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IClienteDTOSwagger = exports.IClienteDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IClienteDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    admin: joi_1.default.boolean(),
    activo: joi_1.default.boolean(),
    nombre: joi_1.default.string(),
    condicionComercialDefault: joi_1.default.string(),
});
exports.IClienteDTOSwagger = (0, joi_to_swagger_1.default)(exports.IClienteDTOValidation).swagger;
