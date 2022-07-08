"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPrincipioActivoDTOSwagger = exports.IPrincipioActivoDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const familia_quimica_1 = require("./familia-quimica");
exports.IPrincipioActivoDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    nombreCorto: joi_1.default.string(),
    idFamiliaQuimica: joi_1.default.string(),
    //
    familiaQuimica: familia_quimica_1.IFamiliaQuimicaDTOValidation,
});
exports.IPrincipioActivoDTOSwagger = (0, joi_to_swagger_1.default)(exports.IPrincipioActivoDTOValidation).swagger;
