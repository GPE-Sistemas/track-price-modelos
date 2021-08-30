import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPagoRelevamientoDTOValidation = joi.object<IPagoRelevamientoDTO>({
    _id: joi.string(),
    precioU$S: joi.number(),
    plazoDias: joi.number(),
    metodos: joi.array().items(joi.string()),
    tasa: joi.number(),
    volumen: joi.number(),

});

export const IPagoRelevamientoDTOSwagger = j2s(IPagoRelevamientoDTOValidation).swagger;

export interface IPagoRelevamientoDTO {
    _id: string;
    precioU$S: number;
    plazoDias: number;
    metodos: string[];
    tasa: number;
    volumen: number;
}
