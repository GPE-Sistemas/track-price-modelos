import joi from 'joi';
export declare const IPagoRelevamientoValidation: joi.ObjectSchema<IPagoRelevamiento>;
export declare const IPagoRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
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
//# sourceMappingURL=pago-relevamiento.d.ts.map