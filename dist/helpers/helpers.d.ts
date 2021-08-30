import { ObjectSchema } from 'joi';
import { IParsedQuery, IQueryParams } from '../modelos';
export declare function validateSchema(dato: any, schema: ObjectSchema): void;
export declare function parseQueryFilters(queryParams?: IQueryParams): IParsedQuery;
export declare function httpRequest<T>(url: string, method: string, queryParams?: Record<string, string | number | boolean>, headers?: Record<string, string>, body?: Record<string, any> | string): Promise<{
    body: T;
    headers: any;
}>;
export declare function hashClave(clave: string): Promise<string>;
export declare function compareClave(clave: string, hash: string): Promise<boolean>;
//# sourceMappingURL=helpers.d.ts.map