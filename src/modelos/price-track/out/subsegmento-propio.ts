import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ISegmentoDTO, ISegmentoDTOValidation } from './segmento';

export const ISubsegmentoPropioDTOValidation = joi.object<ISubsegmentoPropioDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idSegmento: joi.string(),
    //
    segmento: ISegmentoDTOValidation,
});

export const ISubsegmentoPropioDTOSwagger = j2s(ISubsegmentoPropioDTOValidation).swagger;

export interface ISubsegmentoPropioDTO {
    _id: string;
    nombre: string;
    idSegmento: string;
    //
    segmento?: ISegmentoDTO;
}
