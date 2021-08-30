import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IRegionDTO, IRegionDTOValidation } from './region';

export const IZonaDTOValidation = joi.object<IZonaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idRegion: joi.string(),
    //
    region: IRegionDTOValidation
});

export const IZonaDTOSwagger = j2s(IZonaDTOValidation).swagger;

export interface IZonaDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idRegion: string;
    //
    region?: IRegionDTO;
}
