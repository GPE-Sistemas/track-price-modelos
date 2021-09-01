import joi from 'joi';
import { IUsuario } from '../../admin';
export declare const IOperadorValidation: joi.ObjectSchema<IOperador>;
export declare const IOperadorSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperador extends IUsuario {
    idUsuario?: string;
    idsZona?: string[];
    idsRegion?: string[];
    idsProvincia?: string[];
    idsDepartamento?: string[];
    idsLocalidad?: string[];
    global?: boolean;
}
//# sourceMappingURL=operador.d.ts.map