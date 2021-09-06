import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDTO } from './departamento';
import { IProvinciaDTO } from './provincia';
import { IRegionDTO } from './region';
import { IZonaDTO } from './zona';
export declare const ILocalidadDTOValidation: joi.ObjectSchema<ILocalidadDTO>;
export declare const ILocalidadDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILocalidadDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: string;
    idProvincia: string;
    idZona: string;
    idRegion: string;
    departamento?: IDepartamentoDTO;
    provincia?: IProvinciaDTO;
    zona?: IZonaDTO;
    region?: IRegionDTO;
}
//# sourceMappingURL=localidad.d.ts.map