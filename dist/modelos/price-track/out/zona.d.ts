import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IRegionDTO } from './region';
export declare const IZonaDTOValidation: joi.ObjectSchema<IZonaDTO>;
export declare const IZonaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IZonaDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: string;
    region?: IRegionDTO;
}
//# sourceMappingURL=zona.d.ts.map