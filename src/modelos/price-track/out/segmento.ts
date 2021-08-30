import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ISegmentoDTOValidation = joi.object<ISegmentoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const ISegmentoDTOSwagger = j2s(ISegmentoDTOValidation).swagger;

export interface ISegmentoDTO {
    _id: string;
    nombre: string;
}
