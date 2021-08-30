"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareClave = exports.hashClave = exports.httpRequest = exports.parseQueryFilters = exports.validateSchema = void 0;
const got_1 = __importDefault(require("got"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = require("mongoose");
function validateSchema(dato, schema) {
    var _a, _b, _c;
    const result = schema.validate(dato);
    if (!result.error) {
        return;
    }
    else {
        throw {
            error: result.error,
            status: 400,
            mensaje: (_c = (_b = (_a = result.error) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message
        };
    }
}
exports.validateSchema = validateSchema;
function parseQueryFilters(queryParams) {
    var _a;
    const parsedQuery = {
        page: +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.page) || 0),
        limit: +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 0),
        sort: ((_a = queryParams === null || queryParams === void 0 ? void 0 : queryParams.sort) === null || _a === void 0 ? void 0 : _a.toString()) || '-fecha',
        skip: +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.page) || 0) * +((queryParams === null || queryParams === void 0 ? void 0 : queryParams.limit) || 0),
        filter: {},
    };
    if (queryParams) {
        const keysIgnorar = ['_id', 'page', 'limit', 'sort', 'desde', 'hasta', 'dateField', 'search', 'searchFields'];
        // Busqueda por _id
        if (queryParams === null || queryParams === void 0 ? void 0 : queryParams._id) {
            parsedQuery.filter._id = new mongoose_1.Types.ObjectId(queryParams._id);
        }
        // Busqueda por rango de fechas
        if (queryParams.desde && queryParams.hasta) {
            parsedQuery.filter[queryParams.dateField || 'fecha'] = { $gte: queryParams.desde, $lte: queryParams.hasta };
        }
        else if (queryParams.desde) {
            parsedQuery.filter[queryParams.dateField || 'fecha'] = { $gte: queryParams.desde };
        }
        else if (queryParams.hasta) {
            parsedQuery.filter[queryParams.dateField || 'fecha'] = { $lte: queryParams.hasta };
        }
        // Busqueda por regExp
        if (queryParams.search && queryParams.searchFields) {
            const searchFieldsArray = JSON.parse(queryParams.searchFields);
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
                }
                catch (err) {
                    // nada
                }
                // Campos ObjectId
                if (key.substr(0, 2) === 'id') {
                    parsedQuery.filter[key] = mongoose_1.Types.ObjectId(queryParams[key]);
                }
                else {
                    parsedQuery.filter[key] = queryParams[key];
                }
            }
        }
    }
    return parsedQuery;
}
exports.parseQueryFilters = parseQueryFilters;
function httpRequest(url, method, queryParams, headers, body) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                timeout: 60000,
                method: method.toUpperCase(),
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
                }
                else {
                    options.body = body;
                }
            }
            const response = yield got_1.default(url, options);
            let parsedBody;
            try {
                parsedBody = JSON.parse(response.body);
            }
            catch (err) {
                parsedBody = response.body;
            }
            let reponseHeaders;
            try {
                reponseHeaders = JSON.parse(response.headers);
            }
            catch (err) {
                reponseHeaders = response.headers;
            }
            if (/^2/.test('' + response.statusCode)) {
                return { body: parsedBody, headers: reponseHeaders };
            }
            else {
                throw {
                    error: parsedBody,
                    status: response.statusCode,
                    mensaje: parsedBody.mensaje || parsedBody.message || response.statusMessage
                };
            }
        }
        catch (err) {
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
                        mensaje: `Direccion ${(_a = err.options) === null || _a === void 0 ? void 0 : _a.url} no entontrada`,
                        err
                    };
                }
                case 'ECONNREFUSED': {
                    throw {
                        status: 500,
                        mensaje: `Direccion ${(_b = err.options) === null || _b === void 0 ? void 0 : _b.url} no entontrada`,
                        err
                    };
                }
                default: {
                    throw err;
                }
            }
        }
    });
}
exports.httpRequest = httpRequest;
function hashClave(clave) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.hash(clave, 10);
    });
}
exports.hashClave = hashClave;
function compareClave(clave, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(clave, hash);
    });
}
exports.compareClave = compareClave;
