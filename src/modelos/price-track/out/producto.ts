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
    //
    empresa: IEmpresaDTOValidation,
    segmento: ISegmentoDTOValidation,
    subsegmentos: joi.array().items(ISubsegmentoDTOValidation),
});

export const IProductoDTOSwagger = j2s(IProductoDTOValidation).swagger;

export interface IProductoDTO {
    _id: string;
    nombre: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmento: string[];
    composicion?: IComposicionDTO[];
    //
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
}
