import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IDepartamentoDTO, IDepartamentoDTOValidation } from './departamento';
import { IProvinciaDTO, IProvinciaDTOValidation } from './provincia';
import { IRegionDTO, IRegionDTOValidation } from './region';
import { IZonaDTO, IZonaDTOValidation } from './zona';

export const ILocalidadDTOValidation = joi.object<ILocalidadDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idDepartamento: joi.string(),
    idProvincia: joi.string(),
    idZona: joi.string(),
    idRegion: joi.string(),
    //
    departamento: IDepartamentoDTOValidation,
    provincia: IProvinciaDTOValidation,
    zona: IZonaDTOValidation,
    region: IRegionDTOValidation
});

export const ILocalidadDTOSwagger = j2s(ILocalidadDTOValidation).swagger;

export interface ILocalidadDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: string;
    idProvincia: string;
    idZona: string;
    idRegion: string;
    //
    departamento?: IDepartamentoDTO;
    provincia?: IProvinciaDTO;
    zona?: IZonaDTO;
    region?: IRegionDTO;
}
