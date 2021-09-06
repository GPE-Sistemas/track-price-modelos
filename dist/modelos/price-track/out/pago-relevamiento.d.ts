import joi from 'joi';
export declare const IPagoRelevamientoDTOValidation: joi.ObjectSchema<IPagoRelevamientoDTO>;
export declare const IPagoRelevamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
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
//# sourceMappingURL=pago-relevamiento.d.ts.map