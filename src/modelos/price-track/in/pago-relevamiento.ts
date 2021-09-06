import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPagoRelevamientoValidation = joi.object<IPagoRelevamiento>({
    precioFinalU$S: joi.number(),
    precioContadoU$S: joi.number(),
    plazoDias: joi.number(),
    metodos: joi.array().items(joi.string()),
    tarjeta: joi.string(),
    tasaMensual: joi.number(),
    comisionTarjeta: joi.number(),
    volumen: joi.number(),
    plusCanje: joi.number(),
    comisionCanje: joi.number(),
});

export const IPagoRelevamientoSwagger = j2s(IPagoRelevamientoValidation).swagger;

export interface IPagoRelevamiento {
    precioFinalU$S?: number;
    precioContadoU$S?: number;
    plazoDias?: number;
    metodos?: string[];
    tarjeta?: string;
    comisionTarjeta?: number;
    tasaMensual?: number;
    volumen?: number;
    plusCanje?: number;
    comisionCanje?: number;
}
