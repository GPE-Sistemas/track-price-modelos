import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IUsuarioDTO } from '../../admin';
import { IDepartamentoDTO, IDepartamentoDTOValidation } from './departamento';
import { ILocalidadDTO, ILocalidadDTOValidation } from './localidad';
import { IProvinciaDTO, IProvinciaDTOValidation } from './provincia';
import { IRegionDTO, IRegionDTOValidation } from './region';
import { IZonaDTO, IZonaDTOValidation } from './zona';

export const IOperarioDTOValidation = joi.object<IOperarioDTO>({
    // Usuario
    activo: joi.boolean(),
    usuario: joi.string(),
    nombre: joi.string(),
    apellido: joi.string(),
    // clave: joi.string(),
    idCliente: joi.string(),
    dni: joi.string(),
    email: joi.string(),
    pais: joi.string(),
    telefono: joi.string(),
    rol: joi.string().allow('operario'),
    // Operario
    _id: joi.string(),
    idUsuario: joi.string(),
    idsZona: joi.array().items(joi.string()),
    idsRegion: joi.array().items(joi.string()),
    idsProvincia: joi.array().items(joi.string()),
    idsDepartamento: joi.array().items(joi.string()),
    idsLocalidad: joi.array().items(joi.string()),
    global: joi.boolean(),
    // Populate
    regiones: joi.array().items(IRegionDTOValidation),
    zonas: joi.array().items(IZonaDTOValidation),
    provincias: joi.array().items(IProvinciaDTOValidation),
    departamentos: joi.array().items(IDepartamentoDTOValidation),
    localidades: joi.array().items(ILocalidadDTOValidation),
});

export const IOperarioDTOSwagger = j2s(IOperarioDTOValidation).swagger;

export interface IOperarioDTO extends IUsuarioDTO {
    idUsuario: string;
    idsZona: string[];
    idsRegion: string[];
    idsProvincia: string[];
    idsDepartamento: string[];
    idsLocalidad: string[];
    global: boolean;
    // Populate
    regiones?: IRegionDTO[];
    zonas?: IZonaDTO[];
    provincias?: IProvinciaDTO[];
    departamentos?: IDepartamentoDTO[];
    localidades?: ILocalidadDTO[];
}