import joi from 'joi';
import { IFamiliaQuimicaDTO } from './familia-quimica';
export declare const IPrincipioActivoDTOValidation: joi.ObjectSchema<IPrincipioActivoDTO>;
export declare const IPrincipioActivoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPrincipioActivoDTO {
    _id: string;
    nombre: string;
    idFamiliaQuimica: string;
    familiaQuimica?: IFamiliaQuimicaDTO;
}
//# sourceMappingURL=principio-activo.d.ts.map