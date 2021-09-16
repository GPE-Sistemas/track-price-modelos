import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ISubsegmentoPropioValidation = joi.object<ISubsegmentoPropio>({
    nombre: joi.string(),
    idSegmento: joi.string(),
});

export const ISubsegmentoPropioSwagger = j2s(ISubsegmentoPropioValidation).swagger;

export interface ISubsegmentoPropio {
    nombre?: string;
    idSegmento?: string;
}
