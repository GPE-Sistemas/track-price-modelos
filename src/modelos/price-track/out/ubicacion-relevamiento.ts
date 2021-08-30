import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IDepartamentoDTO, IDepartamentoDTOValidation } from './departamento';
import { ILocalidadDTO, ILocalidadDTOValidation } from './localidad';
import { IProvinciaDTO, IProvinciaDTOValidation } from './provincia';
import { IRegionDTO, IRegionDTOValidation } from './region';
import { IZonaDTO, IZonaDTOValidation } from './zona';

export const IUbicacionRelevamientoDTOValidation = joi.object<IUbicacionRelevamientoDTO>({
    _id: joi.string(),
    coordenadas: ICoordenadasValidation,
    idRegion: joi.string(),
    idZona: joi.string(),
    idProvincia: joi.string(),
    idDepartamento: joi.string(),
    idLocalidad: joi.string(),
    // Populate
    region: IRegionDTOValidation,
    zona: IZonaDTOValidation,
    provincia: IProvinciaDTOValidation,
    departamento: IDepartamentoDTOValidation,
    localidad: ILocalidadDTOValidation,
});

export const IUbicacionRelevamientoDTOSwagger = j2s(IUbicacionRelevamientoDTOValidation).swagger;

export interface IUbicacionRelevamientoDTO {
    _id: string;
    coordenadas: ICoordenadas;
    idRegion: string;
    idZona: string;
    idProvincia: string;
    idDepartamento: string;
    idLocalidad: string;
    // Populate
    region?: IRegionDTO;
    zona?: IZonaDTO;
    provincia?: IProvinciaDTO;
    departamento?: IDepartamentoDTO;
    localidad?: ILocalidadDTO;
}
