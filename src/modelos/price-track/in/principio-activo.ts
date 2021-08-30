import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPrincipioActivoValidation = joi.object<IPrincipioActivo>({
    nombre: joi.string(),
    idFamiliaQuimica: joi.string(),
});

export const IPrincipioActivoSwagger = j2s(IPrincipioActivoValidation).swagger;

export interface IPrincipioActivo {
    nombre?: string;
    idFamiliaQuimica?: string;
}
