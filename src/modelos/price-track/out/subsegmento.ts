import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ISegmentoDTO, ISegmentoDTOValidation } from './segmento';

export const ISubsegmentoDTOValidation = joi.object<ISubsegmentoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idSegmento: joi.string(),
    //
    segmento: ISegmentoDTOValidation,
});

export const ISubsegmentoDTOSwagger = j2s(ISubsegmentoDTOValidation).swagger;

export interface ISubsegmentoDTO {
    _id: string;
    nombre: string;
    idSegmento: string;
    //
    segmento?: ISegmentoDTO;
}
