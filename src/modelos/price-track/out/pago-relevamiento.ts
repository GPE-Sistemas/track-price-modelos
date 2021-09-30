import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPagoRelevamientoDTOValidation = joi.object<IPagoRelevamientoDTO>({
    _id: joi.string(),
    precioFinalU$S: joi.number(),
    precioContadoU$S: joi.number(),
    volumen: joi.number(),
    metodos: joi.array().items(
        joi.object({
            metodo: joi.string(),
            plazoDias: joi.number(),
            tasaMensual: joi.number(),
            tarjeta: joi.string(),
            diasLibres: joi.number(),
            plusCanje: joi.number(),
            comisionCanje: joi.number(),
            precioFinalU$S: joi.number(),
            precioContadoU$S: joi.number(),
            porcentajePago: joi.number(),
        }),
    ),
});

export const IPagoRelevamientoDTOSwagger = j2s(IPagoRelevamientoDTOValidation).swagger;

export interface IPagoRelevamientoDTO {
    _id: string;
    precioFinalU$S?: number; // Es la suma de precioFinalU$S de todos los metodos
    precioContadoU$S?: number; // Es la suma de precioContadoU$S de todos los metodos
    volumen?: number;
    metodos?: {
        metodo?: string; // Contado, Tarjeta, Canje, Etc
        plazoDias?: number;
        tasaMensual?: number; // En porcentaje
        tarjeta?: string; // Solo si metodo es tarjeta
        diasLibres?: number; // Solo si metodo es tarjeta
        plusCanje?: number; // Solo si el metodo es canje
        comisionCanje?: number; // Solo si el metodo es canje
        precioFinalU$S?: number; // Precio relevado
        precioContadoU$S?: number; // Precio calculado
        porcentajePago?: number; // Entre todos los metodos debe sumar 100
    }[];
}
