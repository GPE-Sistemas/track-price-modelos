"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEmpresaDTOSwagger = exports.IEmpresaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IEmpresaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    propia: joi_1.default.boolean(),
});
exports.IEmpresaDTOSwagger = joi_to_swagger_1.default(exports.IEmpresaDTOValidation).swagger;
