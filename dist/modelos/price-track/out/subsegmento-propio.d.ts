import joi from 'joi';
import { ISegmentoDTO } from './segmento';
export declare const ISubsegmentoPropioDTOValidation: joi.ObjectSchema<ISubsegmentoPropioDTO>;
export declare const ISubsegmentoPropioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISubsegmentoPropioDTO {
    _id: string;
    nombre: string;
    idSegmento: string;
    segmento?: ISegmentoDTO;
}
//# sourceMappingURL=subsegmento-propio.d.ts.map