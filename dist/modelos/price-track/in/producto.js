"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProductoSwagger = exports.IProductoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const composicion_1 = require("./composicion");
exports.IProductoValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    idEmpresa: joi_1.default.string(),
    idSegmento: joi_1.default.string(),
    idsSubsegmento: joi_1.default.array().items(joi_1.default.string()),
    composicion: joi_1.default.array().items(composicion_1.IComposicionValidation),
});
exports.IProductoSwagger = joi_to_swagger_1.default(exports.IProductoValidation).swagger;
