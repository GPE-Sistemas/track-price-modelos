import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IRegionValidation: joi.ObjectSchema<IRegion>;
export declare const IRegionSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IRegion {
    nombre?: string;
    coordenadas?: ICoordenadas[];
}
//# sourceMappingURL=region.d.ts.map