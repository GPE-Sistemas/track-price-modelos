import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ISubsegmentoPropioDTO } from '..';
import { IComposicionDTO, IComposicionDTOValidation } from './composicion';
import { IEmpresaDTO, IEmpresaDTOValidation } from './empresa';
import { ISegmentoDTO, ISegmentoDTOValidation } from './segmento';
import { ISubsegmentoDTO, ISubsegmentoDTOValidation } from './subsegmento';

export const IProductoDTOValidation = joi.object<IProductoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmentos: joi.array().items(joi.string()),
    idsSubsegmentosPropios: joi.array().items(joi.string()),
    composicion: joi.array().items(IComposicionDTOValidation),
    sku: joi.string().allow(null, ''),
    numeroRegistro: joi.string().allow(null, ''),
    tipo: joi.string().allow(null, ''),
    unidad: joi.string().allow(null, ''),
    formulacion: joi.string().allow(null, ''),
    toxicidad: joi.string().allow(null, ''),
    dosisMedia: joi.number(),
    idsCompetencias: joi.array().items(joi.string()),
    idsComplementos: joi.array().items(joi.string()),
    idsSustitutos: joi.array().items(joi.string()),
    idsAgrupacion1: joi.array().items(joi.string()),
    idsAgrupacion2: joi.array().items(joi.string()),
    // Populate
    empresa: IEmpresaDTOValidation,
    segmento: ISegmentoDTOValidation,
    subsegmentos: joi.array().items(ISubsegmentoDTOValidation),
    competencias: joi.object(),
    complementos: joi.object(),
    sustitutos: joi.object(),
    agrupacion1: joi.object(),
    agrupacion2: joi.object(),
});

export const IProductoDTOSwagger = j2s(IProductoDTOValidation).swagger;

export interface IProductoDTO {
    _id: string;
    nombre: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmentos: string[];
    idsSubsegmentosPropios: string[];
    composicion?: IComposicionDTO[];
    sku: string;
    numeroRegistro: string;
    tipo: string;
    unidad: string;
    formulacion: string;
    toxicidad: string;
    dosisMedia: number;
    idsCompetencias?: string[];
    idsComplementos?: string[];
    idsSustitutos?: string[];
    idsAgrupacion1?: string[];
    idsAgrupacion2?: string[];
    //
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    subsegmentosPropios?: ISubsegmentoPropioDTO[];
    competencias?: IProductoDTO[];
    complementos?: IProductoDTO[];
    sustitutos?: IProductoDTO[];
    agrupacion1?: IProductoDTO[];
    agrupacion2?: IProductoDTO[];
}
