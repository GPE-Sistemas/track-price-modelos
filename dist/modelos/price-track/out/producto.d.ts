import joi from 'joi';
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
    idsSubsegmento: string[];
    composicion?: IComposicionDTO[];
    sku: string;
    tipo: string;
    unidad: string;
    idsCompetencia: string[];
    idsAgrupacion: string[];
    empresa?: IEmpresaDTO;
    segmento?: ISegmentoDTO;
    subsegmentos?: ISubsegmentoDTO[];
    competencia?: IProductoDTO[];
    agrupacion?: IProductoDTO[];
}
//# sourceMappingURL=producto.d.ts.map