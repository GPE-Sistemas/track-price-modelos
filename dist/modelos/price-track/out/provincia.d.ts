import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IRegionDTO } from './region';
export declare const IProvinciaDTOValidation: joi.ObjectSchema<IProvinciaDTO>;
export declare const IProvinciaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProvinciaDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: string;
    region?: IRegionDTO;
}
//# sourceMappingURL=provincia.d.ts.map