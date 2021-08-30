"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IZonaDTOSwagger = exports.IZonaDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const region_1 = require("./region");
exports.IZonaDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    coordenadas: joi_1.default.array().items(shared_1.ICoordenadasValidation),
    idRegion: joi_1.default.string(),
    //
    region: region_1.IRegionDTOValidation
});
exports.IZonaDTOSwagger = joi_to_swagger_1.default(exports.IZonaDTOValidation).swagger;
