"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProductoRelevamientoSwagger = exports.IProductoRelevamientoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const __1 = require("..");
exports.IProductoRelevamientoValidation = joi_1.default.object({
    idProducto: joi_1.default.string(),
    idEmpresa: joi_1.default.string(),
    idSegmento: joi_1.default.string(),
    idsSubsegmentos: joi_1.default.array().items(joi_1.default.string()),
    idsSubsegmentosPropios: joi_1.default.array().items(joi_1.default.string()),
    composicion: joi_1.default.array().items(__1.IComposicionValidation),
});
exports.IProductoRelevamientoSwagger = joi_to_swagger_1.default(exports.IProductoRelevamientoValidation).swagger;
