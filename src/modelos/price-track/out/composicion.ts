import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IUsuarioDTO } from '../../admin';
import { IFamiliaQuimicaDTO, IFamiliaQuimicaDTOValidation } from './familia-quimica';
import { IPrincipioActivoDTO, IPrincipioActivoDTOValidation } from './principio-activo';

export const IComposicionDTOValidation = joi.object<IComposicionDTO>({
    idFamiliaQuimica: joi.string(),
    idPrincipioActivo: joi.string(),
    concentracion: joi.number(),
    formulacion: joi.string(),
    claseTox: joi.string(),
    unidad: joi.string(),
    // Populate
    familiaQuimica: IFamiliaQuimicaDTOValidation,
    principioActivo: IPrincipioActivoDTOValidation,
});

export const IComposicionDTOSwagger = j2s(IComposicionDTOValidation).swagger;

export interface IComposicionDTO {
    _id: string;
    idFamiliaQuimica: string;
    idPrincipioActivo: string;
    concentracion: number;
    formulacion: string;
    claseTox: string;
    unidad: string;
    // Populate
    familiaQuimica?: IFamiliaQuimicaDTO;
    principioActivo?: IPrincipioActivoDTO;
}
