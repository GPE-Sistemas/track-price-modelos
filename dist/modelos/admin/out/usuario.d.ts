import joi from 'joi';
import { IClienteDTO } from './cliente';
export declare const IUsuarioDTOValidation: joi.ObjectSchema<IUsuarioDTO>;
export declare const IUsuarioDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IUsuarioDTO {
    _id: string;
    activo: boolean;
    usuario: string;
    nombre: string;
    apellido: string;
    idCliente: string;
    dni: string;
    email: string;
    pais: string;
    telefono: string;
    rol: string;
    cliente?: IClienteDTO;
}
//# sourceMappingURL=usuario.d.ts.map