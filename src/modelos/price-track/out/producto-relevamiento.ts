import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IUsuarioDTO } from '../../admin';
import { IEmpresaDTO, IEmpresaDTOValidation } from './empresa';
import { IFamiliaQuimicaDTO, IFamiliaQuimicaDTOValidation } from './familia-quimica';
import { IPrincipioActivoDTO, IPrincipioActivoDTOValidation } from './principio-activo';
import { IProductoDTO, IProductoDTOValidation } from './producto';
import { ISegmentoDTO, ISegmentoDTOValidation } from './segmento';
import { ISubsegmentoDTO, ISubsegmentoDTOValidation } from './subsegmento';

export const IProductoRelevamientoDTOValidation = joi.object<IProductoRelevamientoDTO>({
    _id: joi.string(),
    idProducto: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmentos: joi.array().items(joi.string()),
    idsPrincipiosActivos: joi.array().items(joi.string()),
    idsFamiliasQuimicas: joi.array().items(joi.string()),
    // Populate
    producto: IProductoDTOValidation,
    empresa: IEmpresaDTOValidation,
    segmento: ISegmentoDTOValidation,
    subsegmentos: ISubsegmentoDTOValidation,
    principiosActivos: IPrincipioActivoDTOValidation,
    familiasQuimicas: IFamiliaQuimicaDTOValidation,
});

export const IProductoRelevamientoDTOSwagger = j2s(IProductoRelevamientoDTOValidation).swagger;

export interface IProductoRelevamientoDTO {
    _id: string;
    idProducto: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmentos: string[];
    idsPrincipiosActivos: string[];
    idsFamiliasQuimicas: string[];
    // Populate
    producto?: IProductoDTO;
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    principiosActivos?: IPrincipioActivoDTO[];
    familiasQuimicas?: IFamiliaQuimicaDTO[];
}
