import joi from 'joi';
export declare const IPagoRelevamientoDTOValidation: joi.ObjectSchema<IPagoRelevamientoDTO>;
export declare const IPagoRelevamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPagoRelevamientoDTO {
    _id: string;
    precioU$S: number;
    plazoDias: number;
    metodos: string[];
    tasa: number;
    volumen: number;
}
//# sourceMappingURL=pago-relevamiento.d.ts.map