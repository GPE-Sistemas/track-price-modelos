import joi from 'joi';
export declare const IPagoRelevamientoDTOValidation: joi.ObjectSchema<IPagoRelevamientoDTO>;
export declare const IPagoRelevamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPagoRelevamientoDTO {
    _id: string;
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