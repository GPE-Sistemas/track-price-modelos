import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IDepartamentoDTO, IDepartamentoDTOValidation } from './departamento';

export const ILocalidadDTOValidation = joi.object<ILocalidadDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idDepartamento: joi.string(),
    //
    departamento: IDepartamentoDTOValidation
});

export const ILocalidadDTOSwagger = j2s(ILocalidadDTOValidation).swagger;

export interface ILocalidadDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: string;
    //
    departamento?: IDepartamentoDTO;
}
