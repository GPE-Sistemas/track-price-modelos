import joi from "joi";
import j2s from "joi-to-swagger";
import { IProductoDTO } from "./producto";

export const IGrupoComparativoDTOValidation = joi.object<IGrupoComparativoDTO>({
  _id: joi.string(),
  nombre: joi.string(),
  fecha: joi.string(),
  idProductos: joi.array().items(joi.string()),
  productos: joi.array().items(joi.string()),
});

export const IGrupoComparativoDTOSwagger = j2s(
  IGrupoComparativoDTOValidation
).swagger;

export interface IGrupoComparativoDTO {
  _id: string;
  nombre: string;
  fecha: string;
  idProductos: string[];
  productos?: IProductoDTO[];
}
