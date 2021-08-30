import joi from 'joi';
import { IUsuarioDTO } from '../../admin';
import { IDepartamentoDTO } from './departamento';
import { ILocalidadDTO } from './localidad';
import { IProvinciaDTO } from './provincia';
import { IRegionDTO } from './region';
import { IZonaDTO } from './zona';
export declare const IConsultorDTOValidation: joi.ObjectSchema<IConsultorDTO>;
export declare const IConsultorDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IConsultorDTO extends IUsuarioDTO {
    idUsuario: string;
    idsZona: string[];
    idsRegion: string[];
    idsProvincia: string[];
    idsDepartamento: string[];
    idsLocalidad: string[];
    global: boolean;
    regiones?: IRegionDTO[];
    zonas?: IZonaDTO[];
    provincias?: IProvinciaDTO[];
    departamentos?: IDepartamentoDTO[];
    localidades?: ILocalidadDTO[];
}
//# sourceMappingURL=consultor.d.ts.map