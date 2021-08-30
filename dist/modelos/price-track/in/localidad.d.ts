import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const ILocalidadValidation: joi.ObjectSchema<ILocalidad>;
export declare const ILocalidadSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILocalidad {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idDepartamento?: string;
}
//# sourceMappingURL=localidad.d.ts.map