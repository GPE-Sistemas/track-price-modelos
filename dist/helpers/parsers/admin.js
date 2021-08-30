"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminParserService = void 0;
class AdminParserService {
    static usuario(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            usuario: dato.usuario,
            nombre: dato.nombre,
            apellido: dato.apellido,
            idCliente: (_b = dato.idCliente) === null || _b === void 0 ? void 0 : _b.toHexString(),
            dni: dato.dni,
            email: dato.email,
            pais: dato.pais,
            telefono: dato.telefono,
            rol: dato.rol,
            //
            cliente: dato.cliente ? AdminParserService.cliente(dato.cliente) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static usuarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.usuario(dato));
        }
        return dto;
    }
    static cliente(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            admin: dato.admin,
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static clientes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AdminParserService.cliente(dato));
        }
        return dto;
    }
}
exports.AdminParserService = AdminParserService;
