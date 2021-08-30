import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IRegionValidation = joi.object<IRegion>({
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
});

export const IRegionSwagger = j2s(IRegionValidation).swagger;

export interface IRegion {
    nombre?: string;
    coordenadas?: ICoordenadas[];
}
