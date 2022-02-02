import joi from "joi";
import j2s from "joi-to-swagger";

export const IGrupoComparativoValidation = joi.object<IGrupoComparativo>({
  nombre: joi.string(),
  productos: joi.array().items(joi.string()),
});

export const IGrupoComparativoSwagger = j2s(
  IGrupoComparativoValidation
).swagger;

export interface IGrupoComparativo {
  nombre?: string;
  productos?: string[];
}
