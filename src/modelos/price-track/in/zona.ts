import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IZonaValidation = joi.object<IZona>({
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idRegion: joi.string(),
});

export const IZonaSwagger = j2s(IZonaValidation).swagger;

export interface IZona {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idRegion?: string;
}
