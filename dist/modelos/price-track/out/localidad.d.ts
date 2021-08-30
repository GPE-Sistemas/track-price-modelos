import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDTO } from './departamento';
export declare const ILocalidadDTOValidation: joi.ObjectSchema<ILocalidadDTO>;
export declare const ILocalidadDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILocalidadDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: string;
    departamento?: IDepartamentoDTO;
}
//# sourceMappingURL=localidad.d.ts.map