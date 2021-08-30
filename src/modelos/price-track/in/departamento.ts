import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const IDepartamentoValidation = joi.object<IDepartamento>({
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idProvincia: joi.string(),
    idZona: joi.string(),
});

export const IDepartamentoSwagger = j2s(IDepartamentoValidation).swagger;

export interface IDepartamento {
    nombre?: string;
    coordenadas?: ICoordenadas[];
    idProvincia?: string;
    idZona?: string;
}
