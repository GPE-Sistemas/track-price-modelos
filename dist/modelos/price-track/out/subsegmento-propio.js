"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISubsegmentoPropioDTOSwagger = exports.ISubsegmentoPropioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const segmento_1 = require("./segmento");
exports.ISubsegmentoPropioDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    idSegmento: joi_1.default.string(),
    //
    segmento: segmento_1.ISegmentoDTOValidation,
});
exports.ISubsegmentoPropioDTOSwagger = (0, joi_to_swagger_1.default)(exports.ISubsegmentoPropioDTOValidation).swagger;
