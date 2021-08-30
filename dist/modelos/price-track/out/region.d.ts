import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const IRegionDTOValidation: joi.ObjectSchema<IRegionDTO>;
export declare const IRegionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IRegionDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
}
//# sourceMappingURL=region.d.ts.map