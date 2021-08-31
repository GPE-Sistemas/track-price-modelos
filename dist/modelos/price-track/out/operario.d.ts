import joi from 'joi';
import { IUsuarioDTO } from '../../admin';
import { IDepartamentoDTO } from './departamento';
import { ILocalidadDTO } from './localidad';
import { IProvinciaDTO } from './provincia';
import { IRegionDTO } from './region';
import { IZonaDTO } from './zona';
export declare const IOperarioDTOValidation: joi.ObjectSchema<IOperarioDTO>;
export declare const IOperarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IOperarioDTO extends IUsuarioDTO {
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
//# sourceMappingURL=operario.d.ts.map