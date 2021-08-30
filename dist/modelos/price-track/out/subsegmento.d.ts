import joi from 'joi';
import { ISegmentoDTO } from './segmento';
export declare const ISubsegmentoDTOValidation: joi.ObjectSchema<ISubsegmentoDTO>;
export declare const ISubsegmentoDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISubsegmentoDTO {
    _id: string;
    nombre: string;
    idSegmento: string;
    segmento?: ISegmentoDTO;
}
//# sourceMappingURL=subsegmento.d.ts.map