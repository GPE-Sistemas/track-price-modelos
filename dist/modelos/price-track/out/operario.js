"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOperarioDTOSwagger = exports.IOperarioDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const departamento_1 = require("./departamento");
const localidad_1 = require("./localidad");
const provincia_1 = require("./provincia");
const region_1 = require("./region");
const zona_1 = require("./zona");
exports.IOperarioDTOValidation = joi_1.default.object({
    // Usuario
    activo: joi_1.default.boolean(),
    usuario: joi_1.default.string(),
    nombre: joi_1.default.string(),
    apellido: joi_1.default.string(),
    // clave: joi.string(),
    idCliente: joi_1.default.string(),
    dni: joi_1.default.string(),
    email: joi_1.default.string(),
    pais: joi_1.default.string(),
    telefono: joi_1.default.string(),
    rol: joi_1.default.string().allow('operario'),
    // Operario
    _id: joi_1.default.string(),
    idUsuario: joi_1.default.string(),
    idsZona: joi_1.default.array().items(joi_1.default.string()),
    idsRegion: joi_1.default.array().items(joi_1.default.string()),
    idsProvincia: joi_1.default.array().items(joi_1.default.string()),
    idsDepartamento: joi_1.default.array().items(joi_1.default.string()),
    idsLocalidad: joi_1.default.array().items(joi_1.default.string()),
    global: joi_1.default.boolean(),
    // Populate
    regiones: joi_1.default.array().items(region_1.IRegionDTOValidation),
    zonas: joi_1.default.array().items(zona_1.IZonaDTOValidation),
    provincias: joi_1.default.array().items(provincia_1.IProvinciaDTOValidation),
    departamentos: joi_1.default.array().items(departamento_1.IDepartamentoDTOValidation),
    localidades: joi_1.default.array().items(localidad_1.ILocalidadDTOValidation),
});
exports.IOperarioDTOSwagger = joi_to_swagger_1.default(exports.IOperarioDTOValidation).swagger;
