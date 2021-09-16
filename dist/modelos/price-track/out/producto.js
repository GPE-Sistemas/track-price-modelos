"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProductoDTOSwagger = exports.IProductoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const composicion_1 = require("./composicion");
const empresa_1 = require("./empresa");
const segmento_1 = require("./segmento");
const subsegmento_1 = require("./subsegmento");
exports.IProductoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    idEmpresa: joi_1.default.string(),
    idSegmento: joi_1.default.string(),
    idsSubsegmentos: joi_1.default.array().items(joi_1.default.string()),
    idsSubsegmentosPropios: joi_1.default.array().items(joi_1.default.string()),
    composicion: joi_1.default.array().items(composicion_1.IComposicionDTOValidation),
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
    // Populate
    empresa: empresa_1.IEmpresaDTOValidation,
    segmento: segmento_1.ISegmentoDTOValidation,
    subsegmentos: joi_1.default.array().items(subsegmento_1.ISubsegmentoDTOValidation),
    competencias: joi_1.default.object(),
    complementos: joi_1.default.object(),
    sustitutos: joi_1.default.object(),
    agrupacion1: joi_1.default.object(),
    agrupacion2: joi_1.default.object(),
});
exports.IProductoDTOSwagger = joi_to_swagger_1.default(exports.IProductoDTOValidation).swagger;
