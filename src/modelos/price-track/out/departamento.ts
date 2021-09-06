import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IProvinciaDTO, IProvinciaDTOValidation } from './provincia';
import { IRegionDTO, IRegionDTOValidation } from './region';
import { IZonaDTO, IZonaDTOValidation } from './zona';

export const IDepartamentoDTOValidation = joi.object<IDepartamentoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idProvincia: joi.string(),
    idZona: joi.string(),
    idRegion: joi.string(),
    //
    provincia: IProvinciaDTOValidation,
    zona: IZonaDTOValidation,
    region: IRegionDTOValidation
});

export const IDepartamentoDTOSwagger = j2s(IDepartamentoDTOValidation).swagger;

export interface IDepartamentoDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idProvincia: string;
    idZona: string;
    idRegion: string;
    //
    provincia?: IProvinciaDTO;
    zona?: IZonaDTO;
    region?: IRegionDTO;
}
