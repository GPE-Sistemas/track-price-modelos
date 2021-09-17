"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProductoRelevamientoDTOSwagger = exports.IProductoRelevamientoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const __1 = require("..");
const empresa_1 = require("./empresa");
const producto_1 = require("./producto");
const segmento_1 = require("./segmento");
const subsegmento_1 = require("./subsegmento");
exports.IProductoRelevamientoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idProducto: joi_1.default.string(),
    idEmpresa: joi_1.default.string(),
    idSegmento: joi_1.default.string(),
    idsSubsegmentos: joi_1.default.array().items(joi_1.default.string()),
    idsSubsegmentosPropios: joi_1.default.array().items(joi_1.default.string()),
    composicion: joi_1.default.array().items(__1.IComposicionDTOValidation),
    numeroRegistro: joi_1.default.string(),
    // Populate
    producto: producto_1.IProductoDTOValidation,
    empresa: empresa_1.IEmpresaDTOValidation,
    segmento: segmento_1.ISegmentoDTOValidation,
    subsegmentos: subsegmento_1.ISubsegmentoDTOValidation,
    subsegmentosPropios: __1.ISubsegmentoPropioDTOValidation,
});
exports.IProductoRelevamientoDTOSwagger = joi_to_swagger_1.default(exports.IProductoRelevamientoDTOValidation).swagger;
