import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDTO } from './departamento';
import { ILocalidadDTO } from './localidad';
import { IProvinciaDTO } from './provincia';
import { IRegionDTO } from './region';
import { IZonaDTO } from './zona';
export declare const IUbicacionRelevamientoDTOValidation: joi.ObjectSchema<IUbicacionRelevamientoDTO>;
export declare const IUbicacionRelevamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUbicacionRelevamientoDTO {
    _id: string;
    coordenadas: ICoordenadas;
    idRegion: string;
    idZona: string;
    idProvincia: string;
    idDepartamento: string;
    idLocalidad: string;
    region?: IRegionDTO;
    zona?: IZonaDTO;
    provincia?: IProvinciaDTO;
    departamento?: IDepartamentoDTO;
    localidad?: ILocalidadDTO;
}
//# sourceMappingURL=ubicacion-relevamiento.d.ts.map