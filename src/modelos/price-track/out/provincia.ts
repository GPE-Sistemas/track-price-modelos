import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IRegionDTO, IRegionDTOValidation } from './region';

export const IProvinciaDTOValidation = joi.object<IProvinciaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idRegion: joi.string(),
    //
    region: IRegionDTOValidation
});

export const IProvinciaDTOSwagger = j2s(IProvinciaDTOValidation).swagger;

export interface IProvinciaDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: string;
    //
    region?: IRegionDTO;
}
