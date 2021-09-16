import joi from 'joi';
import { ISubsegmentoPropioDTO } from '..';
import { IComposicionDTO } from './composicion';
import { IEmpresaDTO } from './empresa';
import { ISegmentoDTO } from './segmento';
import { ISubsegmentoDTO } from './subsegmento';
export declare const IProductoDTOValidation: joi.ObjectSchema<IProductoDTO>;
export declare const IProductoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IProductoDTO {
    _id: string;
    nombre: string;
    idEmpresa: string;
    idSegmento: string;
    idsSubsegmentos: string[];
    idsSubsegmentosPropios: string[];
    composicion?: IComposicionDTO[];
    sku: string;
    numeroRegistro: string;
    tipo: string;
    unidad: string;
    formulacion: string;
    toxicidad: string;
    dosisMedia: number;
    idsCompetencias?: string[];
    idsComplementos?: string[];
    idsSustitutos?: string[];
    idsAgrupacion1?: string[];
    idsAgrupacion2?: string[];
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    subsegmentosPropios?: ISubsegmentoPropioDTO[];
    competencias?: IProductoDTO[];
    complementos?: IProductoDTO[];
    sustitutos?: IProductoDTO[];
    agrupacion1?: IProductoDTO[];
    agrupacion2?: IProductoDTO[];
}
//# sourceMappingURL=producto.d.ts.map