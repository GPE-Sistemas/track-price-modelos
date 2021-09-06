import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const ILocalidadValidation = joi.object<ILocalidad>({
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idDepartamento: joi.string(),
    idProvincia: joi.string(),
    idZona: joi.string(),
    idRegion: joi.string(),
});

export const ILocalidadSwagger = j2s(ILocalidadValidation).swagger;

export interface ILocalidad {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idDepartamento?: string;
    idProvincia?: string;
    idZona?: string;
    idRegion?: string;
}
