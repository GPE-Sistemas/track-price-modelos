import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IUbicacionRelevamientoValidation = joi.object<IUbicacionRelevamiento>({
    coordenadas: ICoordenadasValidation,
    idRegion: joi.string(),
    idZona: joi.string(),
    idProvincia: joi.string(),
    idDepartamento: joi.string(),
    idLocalidad: joi.string(),
});

export const IUbicacionRelevamientoSwagger = j2s(IUbicacionRelevamientoValidation).swagger;

export interface IUbicacionRelevamiento {
    coordenadas?: ICoordenadas;
    idRegion?: string;
    idZona?: string;
    idProvincia?: string;
    idDepartamento?: string;
    idLocalidad?: string;
}
