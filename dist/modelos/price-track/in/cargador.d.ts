import joi from 'joi';
import { IUsuario } from '../../admin';
export declare const ICargadorValidation: joi.ObjectSchema<ICargador>;
export declare const ICargadorSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ICargador extends IUsuario {
    idUsuario?: string;
    idsZona?: string[];
    idsRegion?: string[];
    idsProvincia?: string[];
    idsDepartamento?: string[];
    idsLocalidad?: string[];
    global?: boolean;
}
//# sourceMappingURL=cargador.d.ts.map