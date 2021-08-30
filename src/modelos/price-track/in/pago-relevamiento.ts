import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPagoRelevamientoValidation = joi.object<IPagoRelevamiento>({
    precioU$S: joi.number(),
    plazoDias: joi.number(),
    metodos: joi.array().items(joi.string()),
    tasa: joi.number(),
    volumen: joi.number(),
});

export const IPagoRelevamientoSwagger = j2s(IPagoRelevamientoValidation).swagger;

export interface IPagoRelevamiento {
    precioU$S?: number;
    plazoDias?: number;
    metodos?: string[];
    tasa?: number;
    volumen?: number;
}
