import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IComposicionDTO, IComposicionDTOValidation } from '..';
import { IEmpresaDTO, IEmpresaDTOValidation } from './empresa';
import { IProductoDTO, IProductoDTOValidation } from './producto';
import { ISegmentoDTO, ISegmentoDTOValidation } from './segmento';
import { ISubsegmentoDTO, ISubsegmentoDTOValidation } from './subsegmento';
import { ISubsegmentoPropioDTO, ISubsegmentoPropioDTOValidation } from './subsegmento-propio';

export const IProductoRelevamientoDTOValidation = joi.object<IProductoRelevamientoDTO>({
    _id: joi.string(),
    idProducto: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmentos: joi.array().items(joi.string()),
    idsSubsegmentosPropios: joi.array().items(joi.string()),
    composicion: joi.array().items(IComposicionDTOValidation),
    numeroRegistro: joi.string(),
    // Populate
    producto: IProductoDTOValidation,
    empresa: IEmpresaDTOValidation,
    segmento: ISegmentoDTOValidation,
    subsegmentos: ISubsegmentoDTOValidation,
    subsegmentosPropios: ISubsegmentoPropioDTOValidation,
});

export const IProductoRelevamientoDTOSwagger = j2s(IProductoRelevamientoDTOValidation).swagger;

export interface IProductoRelevamientoDTO {
    _id: string;
    idProducto: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmentos: string[];
    idsSubsegmentosPropios: string[];
    composicion?: IComposicionDTO[];
    numeroRegistro: string;
    // Populate
    producto?: IProductoDTO;
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    subsegmentosPropios?: ISubsegmentoPropioDTO[];
}
