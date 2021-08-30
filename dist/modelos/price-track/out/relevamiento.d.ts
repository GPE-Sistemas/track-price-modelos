import joi from 'joi';
import { ICargadorDTO } from './cargador';
import { IPagoRelevamientoDTO } from './pago-relevamiento';
import { IProductoRelevamientoDTO } from './producto-relevamiento';
import { IUbicacionRelevamientoDTO } from './ubicacion-relevamiento';
export declare const IRelevamientoDTOValidation: joi.ObjectSchema<IRelevamientoDTO>;
export declare const IRelevamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IRelevamientoDTO {
    _id: string;
    fecha: string;
    campAgricola: string;
    idCargador: string;
    condicionComercial: string;
    fuente: string;
    tipoRelevamiento: string;
    verificado: boolean;
    observaciones: string;
    disponibilidad: string;
    ubicacion?: IUbicacionRelevamientoDTO;
    pago?: IPagoRelevamientoDTO;
    producto?: IProductoRelevamientoDTO;
    cargador?: ICargadorDTO;
}
//# sourceMappingURL=relevamiento.d.ts.map