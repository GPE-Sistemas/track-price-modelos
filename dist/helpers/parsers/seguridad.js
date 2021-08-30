"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguridadParserService = void 0;
class SeguridadParserService {
    static alerta(dato) {
        var _a, _b, _c, _d, _e, _f;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activa: dato.activa,
            estadoActual: dato.estadoActual,
            estados: dato.estados,
            fechaCreacion: (_b = dato.fechaCreacion) === null || _b === void 0 ? void 0 : _b.toISOString(),
            idCiudadano: (_c = dato.idCiudadano) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idsCentroMonitoreo: (_d = dato.idsCentroMonitoreo) === null || _d === void 0 ? void 0 : _d.map(id => id.toHexString()),
            ubicacion: dato.ubicacion,
            tiempoRespuesta: dato.tiempoRespuesta,
            idOperarioActual: (_e = dato.idOperarioActual) === null || _e === void 0 ? void 0 : _e.toHexString(),
            idZona: (_f = dato.idZona) === null || _f === void 0 ? void 0 : _f.toHexString(),
            //
            centrosMonitoreo: dato.centrosMonitoreo ? SeguridadParserService.centrosMonitoreo(dato.centrosMonitoreo) : undefined,
            ciudadano: dato.ciudadano ? SeguridadParserService.ciudadano(dato.ciudadano) : undefined,
            operario: dato.operario ? SeguridadParserService.operario(dato.operario) : undefined,
            zona: dato.zona ? SeguridadParserService.zona(dato.zona) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static alertas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SeguridadParserService.alerta(dato));
        }
        return dto;
    }
    static centroMonitoreo(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            ubicacion: dato.ubicacion
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static centrosMonitoreo(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SeguridadParserService.centroMonitoreo(dato));
        }
        return dto;
    }
    static ciudadano(dato) {
        var _a, _b;
        const dto = {
            // Usuario
            activo: dato.activo,
            email: dato.email,
            idCliente: (_a = dato.idCliente) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            rol: dato.rol,
            pais: dato.pais,
            telefono: dato.telefono,
            dni: dato.dni,
            apellido: dato.apellido,
            usuario: dato.usuario,
            // Ciudadano
            _id: (_b = dato._id) === null || _b === void 0 ? void 0 : _b.toHexString(),
            prioridad: dato.prioridad
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static ciudadanos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SeguridadParserService.ciudadano(dato));
        }
        return dto;
    }
    static operario(dato) {
        var _a, _b, _c;
        const dto = {
            // Usuario
            activo: dato.activo,
            usuario: dato.usuario,
            apellido: dato.apellido,
            email: dato.email,
            idCliente: (_a = dato.idCliente) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            rol: dato.rol,
            pais: dato.pais,
            telefono: dato.telefono,
            dni: dato.dni,
            // Operario
            _id: (_b = dato._id) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idCentroMonitoreo: (_c = dato.idCentroMonitoreo) === null || _c === void 0 ? void 0 : _c.toHexString(),
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static operarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SeguridadParserService.operario(dato));
        }
        return dto;
    }
    static zona(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            coordenadas: dato.coordenadas,
            idsPrioridad: (_b = dato.idsPrioridad) === null || _b === void 0 ? void 0 : _b.map(id => id.toHexString()),
            //
            centrosMonitoreo: dato.centrosMonitoreo ? SeguridadParserService.centrosMonitoreo(dato.centrosMonitoreo) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static zonas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(SeguridadParserService.zona(dato));
        }
        return dto;
    }
}
exports.SeguridadParserService = SeguridadParserService;
