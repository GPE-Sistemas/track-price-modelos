import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IDepartamentoValidation: joi.ObjectSchema<IDepartamento>;
export declare const IDepartamentoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDepartamento {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idProvincia?: string;
    idZona?: string;
    idRegion?: string;
}
//# sourceMappingURL=departamento.d.ts.map