"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEmpresaSwagger = exports.IEmpresaValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IEmpresaValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    propia: joi_1.default.boolean(),
    color: joi_1.default.string(),
});
exports.IEmpresaSwagger = joi_to_swagger_1.default(exports.IEmpresaValidation).swagger;
