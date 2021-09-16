import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IComposicionValidation = joi.object<IComposicion>({
    idFamiliaQuimica: joi.string(),
    idPrincipioActivo: joi.string(),
    concentracion: joi.number(),
    formulacion: joi.string(),
    claseTox: joi.string(),
    unidad: joi.string(),
    principal: joi.boolean(),
});

export const IComposicionSwagger = j2s(IComposicionValidation).swagger;

export interface IComposicion {
    idFamiliaQuimica?: string;
    idPrincipioActivo?: string;
    concentracion?: number;
    formulacion?: string;
    claseTox?: string;
    unidad?: string;
    principal?: boolean;
}
