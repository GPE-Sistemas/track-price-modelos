"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUbicacionRelevamientoDTOSwagger = exports.IUbicacionRelevamientoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const departamento_1 = require("./departamento");
const localidad_1 = require("./localidad");
const provincia_1 = require("./provincia");
const region_1 = require("./region");
const zona_1 = require("./zona");
exports.IUbicacionRelevamientoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    coordenadas: shared_1.ICoordenadasValidation,
    idRegion: joi_1.default.string(),
    idZona: joi_1.default.string(),
    idProvincia: joi_1.default.string(),
    idDepartamento: joi_1.default.string(),
    idLocalidad: joi_1.default.string(),
    // Populate
    region: region_1.IRegionDTOValidation,
    zona: zona_1.IZonaDTOValidation,
    provincia: provincia_1.IProvinciaDTOValidation,
    departamento: departamento_1.IDepartamentoDTOValidation,
    localidad: localidad_1.ILocalidadDTOValidation,
});
exports.IUbicacionRelevamientoDTOSwagger = joi_to_swagger_1.default(exports.IUbicacionRelevamientoDTOValidation).swagger;
