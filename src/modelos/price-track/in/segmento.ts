import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ISegmentoValidation = joi.object<ISegmento>({
    nombre: joi.string(),
});

export const ISegmentoSwagger = j2s(ISegmentoValidation).swagger;

export interface ISegmento {
    nombre?: string;
}
