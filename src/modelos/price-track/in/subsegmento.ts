import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ISubsegmentoValidation = joi.object<ISubsegmento>({
    nombre: joi.string(),
    idSegmento: joi.string(),
});

export const ISubsegmentoSwagger = j2s(ISubsegmentoValidation).swagger;

export interface ISubsegmento {
    nombre?: string;
    idSegmento?: string;
}
