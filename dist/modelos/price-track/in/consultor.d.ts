import joi from 'joi';
import { IUsuario } from '../../admin';
export declare const IConsultorValidation: joi.ObjectSchema<IConsultor>;
export declare const IConsultorSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IConsultor extends IUsuario {
    idUsuario?: string;
    idsZona?: string[];
    idsRegion?: string[];
    idsProvincia?: string[];
    idsDepartamento?: string[];
    idsLocalidad?: string[];
    global?: boolean;
}
//# sourceMappingURL=consultor.d.ts.map