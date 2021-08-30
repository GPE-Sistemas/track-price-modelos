import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IZonaValidation: joi.ObjectSchema<IZona>;
export declare const IZonaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IZona {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idRegion?: string;
}
//# sourceMappingURL=zona.d.ts.map