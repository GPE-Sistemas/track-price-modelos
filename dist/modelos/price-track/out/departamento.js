"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDepartamentoDTOSwagger = exports.IDepartamentoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const provincia_1 = require("./provincia");
const region_1 = require("./region");
const zona_1 = require("./zona");
exports.IDepartamentoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    coordenadas: joi_1.default.array().items(shared_1.ICoordenadasValidation),
    idProvincia: joi_1.default.string(),
    idZona: joi_1.default.string(),
    idRegion: joi_1.default.string(),
    //
    provincia: provincia_1.IProvinciaDTOValidation,
    zona: zona_1.IZonaDTOValidation,
    region: region_1.IRegionDTOValidation
});
exports.IDepartamentoDTOSwagger = joi_to_swagger_1.default(exports.IDepartamentoDTOValidation).swagger;
