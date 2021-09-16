import joi from 'joi';
import { IFamiliaQuimicaDTO } from './familia-quimica';
import { IPrincipioActivoDTO } from './principio-activo';
export declare const IComposicionDTOValidation: joi.ObjectSchema<IComposicionDTO>;
export declare const IComposicionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComposicionDTO {
    _id: string;
    idFamiliaQuimica: string;
    idPrincipioActivo: string;
    concentracion: number;
    formulacion: string;
    claseTox: string;
    unidad: string;
    principal: boolean;
    familiaQuimica?: IFamiliaQuimicaDTO;
    principioActivo?: IPrincipioActivoDTO;
}
//# sourceMappingURL=composicion.d.ts.map