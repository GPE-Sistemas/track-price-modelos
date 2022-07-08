"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IComposicionSwagger = exports.IComposicionValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
exports.IComposicionValidation = joi_1.default.object({
    idFamiliaQuimica: joi_1.default.string(),
    idPrincipioActivo: joi_1.default.string(),
    concentracion: joi_1.default.number(),
    formulacion: joi_1.default.string(),
    claseTox: joi_1.default.string(),
    unidad: joi_1.default.string(),
    principal: joi_1.default.boolean(),
});
exports.IComposicionSwagger = (0, joi_to_swagger_1.default)(exports.IComposicionValidation).swagger;
