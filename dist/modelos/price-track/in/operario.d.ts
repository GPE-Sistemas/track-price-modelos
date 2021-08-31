import joi from 'joi';
import { IUsuario } from '../../admin';
export declare const IOperarioValidation: joi.ObjectSchema<IOperario>;
export declare const IOperarioSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperario extends IUsuario {
    idUsuario?: string;
    idsZona?: string[];
    idsRegion?: string[];
    idsProvincia?: string[];
    idsDepartamento?: string[];
    idsLocalidad?: string[];
    global?: boolean;
}
//# sourceMappingURL=operario.d.ts.map