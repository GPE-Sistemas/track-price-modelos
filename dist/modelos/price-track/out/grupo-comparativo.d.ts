import joi from "joi";
import { IProductoDTO } from "./producto";
export declare const IGrupoComparativoDTOValidation: joi.ObjectSchema<IGrupoComparativoDTO>;
export declare const IGrupoComparativoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGrupoComparativoDTO {
    _id: string;
    nombre: string;
    fecha: string;
    idProductos: string[];
    productos?: IProductoDTO[];
}
//# sourceMappingURL=grupo-comparativo.d.ts.map