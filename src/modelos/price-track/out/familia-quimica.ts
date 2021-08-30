import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IFamiliaQuimicaDTOValidation = joi.object<IFamiliaQuimicaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const IFamiliaQuimicaDTOSwagger = j2s(IFamiliaQuimicaDTOValidation).swagger;

export interface IFamiliaQuimicaDTO {
    _id: string;
    nombre: string;
}
