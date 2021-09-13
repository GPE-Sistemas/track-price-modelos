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

function getFilterValue(type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'regex' | 'objectid', value: string) {
    if (type === 'string') {
        return value;
    } else if (type === 'date') {
        return new Date(value);
    } else if (type === 'number') {
        return +value;
    } else if (type === 'boolean' || type === 'object') {
        return JSON.parse(value);
    } else if (type === 'regex') {
        return { $regex: value, $options: 'i' }
    } else {
        return new Types.ObjectId(value);
    }
}

export function parseQueryFilters(queryParams?: IQueryParams): IParsedQuery {
    const parsedQuery: IParsedQuery = {
        limit: +(queryParams?.limit || 0),
        sort: queryParams?.sort?.toString() || '-fecha',
        skip: +(queryParams?.page || 0) * +(queryParams?.limit || 0),
        filter: {},
    };
    if (typeof queryParams?.filter === 'string') {
        try {
            queryParams.filter = JSON.parse(queryParams.filter);
        } catch (err) {
            // nada
        }
    }
    if (typeof queryParams?.filter === 'object') {
        for (const filtro of queryParams.filter) {
            if (typeof filtro.field === 'string') {
                parsedQuery.filter[filtro.field] = getFilterValue(filtro.type, filtro.value);
            } else {
                parsedQuery.filter.$or = [];
                for (const field of filtro.field) {
                    parsedQuery.filter.$or.push({ [field]: getFilterValue(filtro.type, filtro.value) });
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
