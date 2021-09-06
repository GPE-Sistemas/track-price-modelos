import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPagoRelevamientoDTOValidation = joi.object<IPagoRelevamientoDTO>({
    _id: joi.string(),
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

export const IPagoRelevamientoDTOSwagger = j2s(IPagoRelevamientoDTOValidation).swagger;

export interface IPagoRelevamientoDTO {
    _id: string;
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
