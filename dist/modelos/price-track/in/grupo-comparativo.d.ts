import joi from "joi";
export declare const IGrupoComparativoValidation: joi.ObjectSchema<IGrupoComparativo>;
export declare const IGrupoComparativoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IGrupoComparativo {
    nombre?: string;
    idProductos?: string[];
}
//# sourceMappingURL=grupo-comparativo.d.ts.map