import { LeanDocument } from 'mongoose';
import {
  IClienteDb,
  IClienteDTO,
  IUsuarioDb,
  IUsuarioDTO,
} from '../../modelos';

export class AdminParserService {
  static usuario(dato: LeanDocument<IUsuarioDb>): IUsuarioDTO {
    const dto: IUsuarioDTO = {
      _id: dato._id?.toHexString(),
      activo: dato.activo,
      usuario: dato.usuario,
      nombre: dato.nombre,
      apellido: dato.apellido,
      idCliente: dato.idCliente?.toHexString(),
      dni: dato.dni,
      email: dato.email,
      pais: dato.pais,
      telefono: dato.telefono,
      rol: dato.rol,
      //
      cliente: dato.cliente
        ? AdminParserService.cliente(dato.cliente)
        : undefined,
    };
    Object.keys(dto).forEach((key) =>
      !(dto as any)[key] ? delete (dto as any)[key] : {}
    );
    return dto;
  }
  static usuarios(datos: LeanDocument<IUsuarioDb>[]): IUsuarioDTO[] {
    const dto: IUsuarioDTO[] = [];
    for (const dato of datos) {
      dto.push(AdminParserService.usuario(dato));
    }
    return dto;
  }

  static cliente(dato: LeanDocument<IClienteDb>): IClienteDTO {
    const dto: IClienteDTO = {
      _id: dato._id?.toHexString(),
      activo: dato.activo,
      admin: dato.admin,
      nombre: dato.nombre,
      condicionComercialDefault: dato.condicionComercialDefault,
    };
    Object.keys(dto).forEach((key) =>
      !(dto as any)[key] ? delete (dto as any)[key] : {}
    );
    return dto;
  }
  static clientes(datos: LeanDocument<IClienteDb>[]): IClienteDTO[] {
    const dto: IClienteDTO[] = [];
    for (const dato of datos) {
      dto.push(AdminParserService.cliente(dato));
    }
    return dto;
  }
}
