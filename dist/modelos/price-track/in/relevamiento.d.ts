import joi from 'joi';
import { IPagoRelevamiento } from './pago-relevamiento';
import { IProductoRelevamiento } from './producto-relevamiento';
import { IUbicacionRelevamiento } from './ubicacion-relevamiento';
export declare const IRelevamientoValidation: joi.ObjectSchema<IRelevamiento>;
export declare const IRelevamientoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IRelevamiento {
    fecha?: string;
    campAgricola?: string;
    idCargador?: string;
    condicionComercial?: string;
    fuente?: string;
    tipoRelevamiento?: string;
    verificado?: boolean;
    observaciones?: string;
    disponibilidad?: string;
    ubicacion?: IUbicacionRelevamiento;
    pago?: IPagoRelevamiento;
    producto?: IProductoRelevamiento;
}
//# sourceMappingURL=relevamiento.d.ts.map