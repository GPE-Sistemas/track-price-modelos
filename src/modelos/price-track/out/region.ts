import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IRegionDTOValidation = joi.object<IRegionDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
});

export const IRegionDTOSwagger = j2s(IRegionDTOValidation).swagger;

export interface IRegionDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
}
