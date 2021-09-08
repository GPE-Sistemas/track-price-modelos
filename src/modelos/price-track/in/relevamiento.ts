import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IPagoRelevamiento, IPagoRelevamientoValidation } from './pago-relevamiento';
import { IProductoRelevamiento, IProductoRelevamientoValidation } from './producto-relevamiento';
import { IUbicacionRelevamiento, IUbicacionRelevamientoValidation } from './ubicacion-relevamiento';

export const IRelevamientoValidation = joi.object<IRelevamiento>({
    fecha: joi.string(),
    campAgricola: joi.string(),
    idUsuario: joi.string(),
    condicionComercial: joi.string(), // .allow('Distribuidor', 'Grandes Cuentas', 'Productor'),
    fuente: joi.string(),
    tipoRelevamiento: joi.string(), // .allow('Condición de Mercado', 'Precio de Lista', 'Cotización Perdida', 'Disponibilidad'),
    verificado: joi.boolean(),
    observaciones: joi.string() ,
    disponibilidad: joi.string(), // .allow('Reduccion de disponibilidad para comprar', 'Demora en entrega, pero entregan', 'Reducción de volumen a entregar de lo que ya estaba comprado', 'No entrega de lo pactado'),
    ubicacion: IUbicacionRelevamientoValidation,
    pago: IPagoRelevamientoValidation,
    producto: IProductoRelevamientoValidation,
});

export const IRelevamientoSwagger = j2s(IRelevamientoValidation).swagger;

export interface IRelevamiento {
    fecha?: string;
    campAgricola?: string;
    idUsuario?: string;
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
