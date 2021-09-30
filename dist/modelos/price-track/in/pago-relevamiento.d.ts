import joi from 'joi';
export declare const IPagoRelevamientoValidation: joi.ObjectSchema<IPagoRelevamiento>;
export declare const IPagoRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPagoRelevamiento {
    precioFinalU$S?: number;
    precioContadoU$S?: number;
    volumen?: number;
    metodos?: {
        metodo?: string;
        plazoDias?: number;
        tasaMensual?: number;
        tarjeta?: string;
        diasLibres?: number;
        plusCanje?: number;
        comisionCanje?: number;
        precioFinalU$S?: number;
        precioContadoU$S?: number;
        porcentajePago?: number;
    }[];
}
//# sourceMappingURL=pago-relevamiento.d.ts.map