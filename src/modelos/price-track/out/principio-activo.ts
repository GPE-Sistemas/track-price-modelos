import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IFamiliaQuimicaDTO, IFamiliaQuimicaDTOValidation } from './familia-quimica';

export const IPrincipioActivoDTOValidation = joi.object<IPrincipioActivoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    nombreCorto: joi.string(),
    idFamiliaQuimica: joi.string(),
    //
    familiaQuimica: IFamiliaQuimicaDTOValidation,
});

export const IPrincipioActivoDTOSwagger = j2s(IPrincipioActivoDTOValidation).swagger;

export interface IPrincipioActivoDTO {
    _id: string;
    nombre: string;
    nombreCorto: string;
    idFamiliaQuimica: string;
    //
    familiaQuimica?: IFamiliaQuimicaDTO;
}
