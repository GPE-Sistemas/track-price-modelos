export interface IQueryParams {
    page?: number;
    limit?: number;
    sort?: string;
    filter?: {
        field: string | string[];
        type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'regex' | 'objectid';
        value: string;
    }[] | string;
    [key: string]: any;
}
//# sourceMappingURL=queryParams.d.ts.map