import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IFamiliaQuimicaValidation = joi.object<IFamiliaQuimica>({
    nombre: joi.string(),
});

export const IFamiliaQuimicaSwagger = j2s(IFamiliaQuimicaValidation).swagger;

export interface IFamiliaQuimica {
    nombre?: string;
}
