import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IUbicacionRelevamientoValidation: joi.ObjectSchema<IUbicacionRelevamiento>;
export declare const IUbicacionRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUbicacionRelevamiento {
    coordenadas?: ICoordenadas;
    idRegion?: string;
    idZona?: string;
    idProvincia?: string;
    idDepartamento?: string;
    idLocalidad?: string;
}
//# sourceMappingURL=ubicacion-relevamiento.d.ts.map