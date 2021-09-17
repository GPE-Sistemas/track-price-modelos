import joi from 'joi';
import { IComposicionDTO, ISubsegmentoPropioDTO } from '..';
import { IEmpresaDTO } from './empresa';
import { IProductoDTO } from './producto';
import { ISegmentoDTO } from './segmento';
import { ISubsegmentoDTO } from './subsegmento';
export declare const IProductoRelevamientoDTOValidation: joi.ObjectSchema<IProductoRelevamientoDTO>;
export declare const IProductoRelevamientoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProductoRelevamientoDTO {
    _id: string;
    idProducto: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmentos: string[];
    idsSubsegmentosPropios: string[];
    composicion?: IComposicionDTO[];
    numeroRegistro: string;
    producto?: IProductoDTO;
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    subsegmentosPropios?: ISubsegmentoPropioDTO[];
}
//# sourceMappingURL=producto-relevamiento.d.ts.map