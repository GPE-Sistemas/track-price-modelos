"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IComposicionDTOSwagger = exports.IComposicionDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const familia_quimica_1 = require("./familia-quimica");
const principio_activo_1 = require("./principio-activo");
exports.IComposicionDTOValidation = joi_1.default.object({
    idFamiliaQuimica: joi_1.default.string(),
    idPrincipioActivo: joi_1.default.string(),
    concentracion: joi_1.default.number(),
    formulacion: joi_1.default.string(),
    claseTox: joi_1.default.string(),
    unidad: joi_1.default.string(),
    // Populate
    familiaQuimica: familia_quimica_1.IFamiliaQuimicaDTOValidation,
    principioActivo: principio_activo_1.IPrincipioActivoDTOValidation,
});
exports.IComposicionDTOSwagger = joi_to_swagger_1.default(exports.IComposicionDTOValidation).swagger;
