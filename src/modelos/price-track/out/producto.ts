import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IComposicionDTO, IComposicionDTOValidation } from './composicion';
import { IEmpresaDTO, IEmpresaDTOValidation } from './empresa';
import { ISegmentoDTO, ISegmentoDTOValidation } from './segmento';
import { ISubsegmentoDTO, ISubsegmentoDTOValidation } from './subsegmento';

export const IProductoDTOValidation = joi.object<IProductoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idEmpresa: joi.string(),
    idSegmento: joi.string(),
    idsSubsegmento: joi.array().items(joi.string()),
    composicion: joi.array().items(IComposicionDTOValidation),
    sku: joi.string(),
    tipo: joi.string().allow('Genérico', 'Diferenciado'),
    unidad: joi.string().allow('L', 'Kg', 'Litro'),
    idsCompetencia: joi.array().items(joi.string()),
    idsAgrupacion: joi.array().items(joi.string()),
    //
    empresa: IEmpresaDTOValidation,
    segmento: ISegmentoDTOValidation,
    subsegmentos: joi.array().items(ISubsegmentoDTOValidation),
    competencia: joi.object(),
    agrupacion: joi.object(),
});

export const IProductoDTOSwagger = j2s(IProductoDTOValidation).swagger;

export interface IProductoDTO {
    _id: string;
    nombre: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmento: string[];
    composicion?: IComposicionDTO[];
    sku: string;
    tipo: string;
    unidad: string;
    idsCompetencia: string[];
    idsAgrupacion: string[];
    //
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    competencia?: IProductoDTO[];
    agrupacion?: IProductoDTO[];
}
