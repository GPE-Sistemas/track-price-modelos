import got from 'got';
import bcrypt from 'bcryptjs';
import { ObjectSchema, ValidationResult } from 'joi';
import { Types } from 'mongoose';
import { IParsedQuery, IQueryParams } from '../modelos';
import { Options, Method } from 'got/dist/source/core';

export function validateSchema(dato: any, schema: ObjectSchema): void {
    const result: ValidationResult = schema.validate(dato);
    if (!result.error) {
        return;
    } else {
        throw {
            error: result.error,
            status: 400,
            mensaje: result.error?.details?.[0]?.message
        };
    }
}

export function parseQueryFilters(queryParams?: IQueryParams): IParsedQuery {
    const parsedQuery: IParsedQuery = {
        page: +(queryParams?.page || 0),
        limit: +(queryParams?.limit || 0),
        sort: queryParams?.sort?.toString() || '-fecha',
        skip: +(queryParams?.page || 0) * +(queryParams?.limit || 0),
        filter: {},
    };
    if (queryParams) {
        const keysIgnorar = ['_id', 'page', 'limit', 'sort', 'desde', 'hasta', 'dateField', 'search', 'searchFields'];
        // Busqueda por _id
        if (queryParams?._id) {
            parsedQuery.filter._id = new Types.ObjectId(queryParams._id);
        }
        // Busqueda por rango de fechas
        if (queryParams.desde && queryParams.hasta) {
            parsedQuery.filter[queryParams.dateField || 'fecha'] = { $gte: queryParams.desde, $lte: queryParams.hasta };
        } else if (queryParams.desde) {
            parsedQuery.filter[queryParams.dateField || 'fecha'] = { $gte: queryParams.desde };
        } else if (queryParams.hasta) {
            parsedQuery.filter[queryParams.dateField || 'fecha'] = { $lte: queryParams.hasta };
        }
        // Busqueda por regExp
        if (queryParams.search && queryParams.searchFields) {
            const searchFieldsArray: string[] = JSON.parse(queryParams.searchFields);
            parsedQuery.filter.$or = [];
            for (const searchField of searchFieldsArray) {
                parsedQuery.filter.$or.push({ [searchField]: { $regex: queryParams.search, $options: 'i' } });
            }
        }
        // Busqueda por campos especificos
        for (const key in queryParams) {
            if (!keysIgnorar.includes(key)) {
                try {
                    queryParams[key] = JSON.parse(queryParams[key]);
                } catch (err) {
                    // nada
                }
                // Campos ObjectId
                if (key.substr(0, 2) === 'id') {
                    parsedQuery.filter[key] = Types.ObjectId(queryParams[key]);
                } else {
                    parsedQuery.filter[key] = queryParams[key];
                }
            }
        }
    }
    return parsedQuery;
}

export async function httpRequest<T>(url: string, method: string, queryParams?: Record<string, string | number | boolean>, headers?: Record<string, string>, body?: Record<string, any> | string): Promise<{ body: T, headers: any }> {
    try {
        const options: Options = {
            timeout: 60000,
            method: method.toUpperCase() as Method,
            https: {
                rejectUnauthorized: false,
            },
            throwHttpErrors: false,
        };
        if (queryParams) {
            options.searchParams = queryParams;
        }
        if (headers) {
            options.headers = headers;
        }
        if (body && (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT')) {
            if (typeof body === 'object') {
                options.json = body;
            } else {
                options.body = body;
            }
        }
        const response: any = await got(url, options);

        let parsedBody;
        try {
            parsedBody = JSON.parse(response.body);
        } catch (err) {
            parsedBody = response.body;
        }

        let reponseHeaders;
        try {
            reponseHeaders = JSON.parse(response.headers);
        } catch (err) {
            reponseHeaders = response.headers;
        }

        if (/^2/.test('' + response.statusCode)) {
            return { body: parsedBody, headers: reponseHeaders };
        } else {
            throw {
                error: parsedBody,
                status: response.statusCode,
                mensaje: parsedBody.mensaje || parsedBody.message || response.statusMessage
            };
        }
    } catch (err) {
        switch (err.code) {
            case 'ETIMEDOUT': {
                throw {
                    status: 500,
                    mensaje: 'Tiempo de espera agotado para la solicitud',
                    err
                };
            }
            case 'ENOTFOUND': {
                throw {
                    status: 500,
                    mensaje: `Direccion ${err.options?.url} no entontrada`,
                    err
                };
            }
            case 'ECONNREFUSED': {
                throw {
                    status: 500,
                    mensaje: `Direccion ${err.options?.url} no entontrada`,
                    err
                };
            }
            default: {
                throw err;
            }
        }
    }
}

export async function hashClave(clave: string): Promise<string> {
    return await bcrypt.hash(clave, 10);
}

export async function compareClave(clave: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(clave, hash);
}
