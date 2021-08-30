import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICargadorDTO, ICargadorDTOValidation } from './cargador';
import { IPagoRelevamientoDTO, IPagoRelevamientoDTOValidation } from './pago-relevamiento';
import { IProductoRelevamientoDTO, IProductoRelevamientoDTOValidation } from './producto-relevamiento';
import { IUbicacionRelevamientoDTO, IUbicacionRelevamientoDTOValidation } from './ubicacion-relevamiento';

export const IRelevamientoDTOValidation = joi.object<IRelevamientoDTO>({
    _id: joi.string(),
    fecha: joi.string(),
    campAgricola: joi.string(),
    idCargador: joi.string(),
    condicionComercial: joi.string(), // .allow('Distribuidor', 'Grandes Cuentas', 'Productor'),
    fuente: joi.string(),
    tipoRelevamiento: joi.string(), // .allow('Condición de Mercado', 'Precio de Lista', 'Cotización Perdida', 'Disponibilidad'),
    verificado: joi.boolean(),
    observaciones: joi.string() ,
    disponibilidad: joi.string(), // .allow('Reduccion de disponibilidad para comprar', 'Demora en entrega, pero entregan', 'Reducción de volumen a entregar de lo que ya estaba comprado', 'No entrega de lo pactado'),
    ubicacion: IUbicacionRelevamientoDTOValidation,
    pago: IPagoRelevamientoDTOValidation,
    producto: IProductoRelevamientoDTOValidation,
    //
    cargador: ICargadorDTOValidation
});

export const IRelevamientoDTOSwagger = j2s(IRelevamientoDTOValidation).swagger;

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
    //
    cargador?: ICargadorDTO;
}
