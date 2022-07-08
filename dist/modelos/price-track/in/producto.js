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
    idsSubsegmentos: joi_1.default.array().items(joi_1.default.string()),
    idsSubsegmentosPropios: joi_1.default.array().items(joi_1.default.string()),
    composicion: joi_1.default.array().items(composicion_1.IComposicionValidation),
    sku: joi_1.default.string().allow(null, ''),
    numeroRegistro: joi_1.default.string().allow(null, ''),
    tipo: joi_1.default.string().allow(null, ''),
    unidad: joi_1.default.string().allow(null, ''),
    formulacion: joi_1.default.string().allow(null, ''),
    toxicidad: joi_1.default.string().allow(null, ''),
    dosisMedia: joi_1.default.number(),
    idsCompetencias: joi_1.default.array().items(joi_1.default.string()),
    idsComplementos: joi_1.default.array().items(joi_1.default.string()),
    idsSustitutos: joi_1.default.array().items(joi_1.default.string()),
    idsAgrupacion1: joi_1.default.array().items(joi_1.default.string()),
    idsAgrupacion2: joi_1.default.array().items(joi_1.default.string()),
});
exports.IProductoSwagger = (0, joi_to_swagger_1.default)(exports.IProductoValidation).swagger;
