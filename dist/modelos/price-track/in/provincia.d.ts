import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IProvinciaValidation: joi.ObjectSchema<IProvincia>;
export declare const IProvinciaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProvincia {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idRegion?: string;
}
//# sourceMappingURL=provincia.d.ts.map