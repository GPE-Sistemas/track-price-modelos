import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IProvinciaValidation = joi.object<IProvincia>({
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idRegion: joi.string(),
});

export const IProvinciaSwagger = j2s(IProvinciaValidation).swagger;

export interface IProvincia {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idRegion?: string;
}
