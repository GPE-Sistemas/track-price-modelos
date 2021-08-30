import joi from 'joi';
export declare const IPagoRelevamientoValidation: joi.ObjectSchema<IPagoRelevamiento>;
export declare const IPagoRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPagoRelevamiento {
    precioU$S?: number;
    plazoDias?: number;
    metodos?: string[];
    tasa?: number;
    volumen?: number;
}
//# sourceMappingURL=pago-relevamiento.d.ts.map