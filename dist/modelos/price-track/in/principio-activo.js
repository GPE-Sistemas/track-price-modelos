"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPrincipioActivoSwagger = exports.IPrincipioActivoValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IPrincipioActivoValidation = joi_1.default.object({
    nombre: joi_1.default.string(),
    idFamiliaQuimica: joi_1.default.string(),
    nombreCorto: joi_1.default.string(),
});
exports.IPrincipioActivoSwagger = joi_to_swagger_1.default(exports.IPrincipioActivoValidation).swagger;
