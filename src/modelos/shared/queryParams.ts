export interface IQueryParams {
    // Para paginacion
    page?: number;
    limit?: number;
    sort?: string;
    // Filtros
    filter?: {
        field: string;
        type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'objectid';
        value: string;
    }[] | string;
    [key: string]: any;
}
