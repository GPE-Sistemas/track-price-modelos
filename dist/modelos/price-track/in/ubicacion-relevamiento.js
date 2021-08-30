"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUbicacionRelevamientoSwagger = exports.IUbicacionRelevamientoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
exports.IUbicacionRelevamientoValidation = joi_1.default.object({
    coordenadas: shared_1.ICoordenadasValidation,
    idRegion: joi_1.default.string(),
    idZona: joi_1.default.string(),
    idProvincia: joi_1.default.string(),
    idDepartamento: joi_1.default.string(),
    idLocalidad: joi_1.default.string(),
});
exports.IUbicacionRelevamientoSwagger = joi_to_swagger_1.default(exports.IUbicacionRelevamientoValidation).swagger;
