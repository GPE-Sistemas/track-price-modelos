import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IProvinciaDTO } from './provincia';
import { IRegionDTO } from './region';
import { IZonaDTO } from './zona';
export declare const IDepartamentoDTOValidation: joi.ObjectSchema<IDepartamentoDTO>;
export declare const IDepartamentoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDepartamentoDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idProvincia: string;
    idZona: string;
    idRegion: string;
    provincia?: IProvinciaDTO;
    zona?: IZonaDTO;
    region?: IRegionDTO;
}
//# sourceMappingURL=departamento.d.ts.map