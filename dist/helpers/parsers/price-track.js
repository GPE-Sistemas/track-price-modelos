"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackPriceParserService = void 0;
class TrackPriceParserService {
    // Usuarios
    static cargador(dato) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const dto = {
            // Usuario
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            apellido: dato.apellido,
            dni: dato.dni,
            email: dato.email,
            idCliente: (_b = dato.idCliente) === null || _b === void 0 ? void 0 : _b.toHexString(),
            nombre: dato.nombre,
            pais: dato.pais,
            rol: dato.rol,
            telefono: dato.telefono,
            usuario: dato.usuario,
            //
            idUsuario: (_c = dato.idUsuario) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idsDepartamento: (_d = dato.idsDepartamento) === null || _d === void 0 ? void 0 : _d.map(id => id.toHexString()),
            idsZona: (_e = dato.idsZona) === null || _e === void 0 ? void 0 : _e.map(id => id.toHexString()),
            idsProvincia: (_f = dato.idsProvincia) === null || _f === void 0 ? void 0 : _f.map(id => id.toHexString()),
            idsRegion: (_g = dato.idsRegion) === null || _g === void 0 ? void 0 : _g.map(id => id.toHexString()),
            idsLocalidad: (_h = dato.idsLocalidad) === null || _h === void 0 ? void 0 : _h.map(id => id.toHexString()),
            global: dato.global,
            //
            regiones: dato.regiones ? TrackPriceParserService.regiones(dato.regiones) : undefined,
            provincias: dato.provincias ? TrackPriceParserService.provincias(dato.provincias) : undefined,
            zonas: dato.zonas ? TrackPriceParserService.zonas(dato.zonas) : undefined,
            departamentos: dato.departamentos ? TrackPriceParserService.departamentos(dato.departamentos) : undefined,
            localidades: dato.localidades ? TrackPriceParserService.localidades(dato.localidades) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static cargadores(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.cargador(dato));
        }
        return dto;
    }
    static consultor(dato) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const dto = {
            // Usuario
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            apellido: dato.apellido,
            dni: dato.dni,
            email: dato.email,
            idCliente: (_b = dato.idCliente) === null || _b === void 0 ? void 0 : _b.toHexString(),
            nombre: dato.nombre,
            pais: dato.pais,
            rol: dato.rol,
            telefono: dato.telefono,
            usuario: dato.usuario,
            //
            idUsuario: (_c = dato.idUsuario) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idsDepartamento: (_d = dato.idsDepartamento) === null || _d === void 0 ? void 0 : _d.map(id => id.toHexString()),
            idsZona: (_e = dato.idsZona) === null || _e === void 0 ? void 0 : _e.map(id => id.toHexString()),
            idsProvincia: (_f = dato.idsProvincia) === null || _f === void 0 ? void 0 : _f.map(id => id.toHexString()),
            idsRegion: (_g = dato.idsRegion) === null || _g === void 0 ? void 0 : _g.map(id => id.toHexString()),
            idsLocalidad: (_h = dato.idsLocalidad) === null || _h === void 0 ? void 0 : _h.map(id => id.toHexString()),
            global: dato.global,
            //
            regiones: dato.regiones ? TrackPriceParserService.regiones(dato.regiones) : undefined,
            provincias: dato.provincias ? TrackPriceParserService.provincias(dato.provincias) : undefined,
            zonas: dato.zonas ? TrackPriceParserService.zonas(dato.zonas) : undefined,
            departamentos: dato.departamentos ? TrackPriceParserService.departamentos(dato.departamentos) : undefined,
            localidades: dato.localidades ? TrackPriceParserService.localidades(dato.localidades) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static consultores(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.consultor(dato));
        }
        return dto;
    }
    // Zonas
    static region(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            coordenadas: dato.coordenadas,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static regiones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.region(dato));
        }
        return dto;
    }
    static zona(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idRegion: (_b = dato.idRegion) === null || _b === void 0 ? void 0 : _b.toHexString(),
            nombre: dato.nombre,
            //
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static zonas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.zona(dato));
        }
        return dto;
    }
    static provincia(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idRegion: (_b = dato.idRegion) === null || _b === void 0 ? void 0 : _b.toHexString(),
            nombre: dato.nombre,
            //
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static provincias(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.provincia(dato));
        }
        return dto;
    }
    static departamento(dato) {
        var _a, _b, _c;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idProvincia: (_b = dato.idProvincia) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idZona: (_c = dato.idZona) === null || _c === void 0 ? void 0 : _c.toHexString(),
            nombre: dato.nombre,
            //
            provincia: dato.provincia ? TrackPriceParserService.provincia(dato.provincia) : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static departamentos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.departamento(dato));
        }
        return dto;
    }
    static localidad(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idDepartamento: (_b = dato.idDepartamento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            nombre: dato.nombre,
            //
            departamento: dato.departamento ? TrackPriceParserService.departamento(dato.departamento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static localidades(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.localidad(dato));
        }
        return dto;
    }
    // Productos
    static empresa(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            propia: dato.propia,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static empresas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.empresa(dato));
        }
        return dto;
    }
    static segmento(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static segmentos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.segmento(dato));
        }
        return dto;
    }
    static subsegmento(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            idSegmento: (_b = dato.idSegmento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            segmento: dato.segmento ? TrackPriceParserService.segmento(dato.segmento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static subsegmentos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.subsegmento(dato));
        }
        return dto;
    }
    static familiaQuimica(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static familiasQuimicas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.familiaQuimica(dato));
        }
        return dto;
    }
    static principioActivo(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            idFamiliaQuimica: (_b = dato.idFamiliaQuimica) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            familiaQuimica: dato.familiaQuimica ? TrackPriceParserService.familiaQuimica(dato.familiaQuimica) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static principiosActivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.principioActivo(dato));
        }
        return dto;
    }
    static composicion(dato) {
        var _a, _b, _c;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idPrincipioActivo: (_b = dato.idPrincipioActivo) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idFamiliaQuimica: (_c = dato.idFamiliaQuimica) === null || _c === void 0 ? void 0 : _c.toHexString(),
            concentracion: dato.concentracion,
            formulacion: dato.formulacion,
            //
            principioActivo: dato.principioActivo ? TrackPriceParserService.principioActivo(dato.principioActivo) : undefined,
            familiaQuimica: dato.familiaQuimica ? TrackPriceParserService.familiaQuimica(dato.familiaQuimica) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static composiciones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.composicion(dato));
        }
        return dto;
    }
    static producto(dato) {
        var _a, _b, _c, _d;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            composicion: dato.composicion ? TrackPriceParserService.composiciones(dato.composicion) : undefined,
            idEmpresa: (_b = dato.idEmpresa) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idSegmento: (_c = dato.idSegmento) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idsSubsegmento: (_d = dato.idsSubsegmento) === null || _d === void 0 ? void 0 : _d.map(id => id.toHexString()),
            nombre: dato.nombre,
            //
            empresa: dato.empresa ? TrackPriceParserService.empresa(dato.empresa) : undefined,
            segmento: dato.segmento ? TrackPriceParserService.segmento(dato.segmento) : undefined,
            subsegmentos: dato.subsegmentos ? TrackPriceParserService.subsegmentos(dato.subsegmentos) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static productos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.producto(dato));
        }
        return dto;
    }
    // Relevamientos
    static pagoRelevamiento(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            metodos: dato.metodos,
            plazoDias: dato.plazoDias,
            precioU$S: dato.precioU$S,
            tasa: dato.tasa,
            volumen: dato.volumen,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static pagosRelevamiento(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.pagoRelevamiento(dato));
        }
        return dto;
    }
    static productoRelevamiento(dato) {
        var _a, _b, _c, _d, _e, _f, _g;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idEmpresa: (_b = dato.idEmpresa) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idProducto: (_c = dato.idProducto) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idSegmento: (_d = dato.idSegmento) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idsSubsegmentos: (_e = dato.idsSubsegmentos) === null || _e === void 0 ? void 0 : _e.map(id => id.toHexString()),
            idsFamiliasQuimicas: (_f = dato.idsFamiliasQuimicas) === null || _f === void 0 ? void 0 : _f.map(id => id.toHexString()),
            idsPrincipiosActivos: (_g = dato.idsPrincipiosActivos) === null || _g === void 0 ? void 0 : _g.map(id => id.toHexString()),
            //
            empresa: dato.empresa ? TrackPriceParserService.empresa(dato.empresa) : undefined,
            segmento: dato.segmento ? TrackPriceParserService.segmento(dato.segmento) : undefined,
            subsegmentos: dato.subsegmentos ? TrackPriceParserService.subsegmentos(dato.subsegmentos) : undefined,
            familiasQuimicas: dato.familiasQuimicas ? TrackPriceParserService.familiasQuimicas(dato.familiasQuimicas) : undefined,
            principiosActivos: dato.principiosActivos ? TrackPriceParserService.principiosActivos(dato.principiosActivos) : undefined,
            producto: dato.producto ? TrackPriceParserService.producto(dato.producto) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static productosRelevamiento(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.productoRelevamiento(dato));
        }
        return dto;
    }
    static ubicacionRelevamiento(dato) {
        var _a, _b, _c, _d, _e, _f;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idDepartamento: (_b = dato.idDepartamento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idLocalidad: (_c = dato.idLocalidad) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idProvincia: (_d = dato.idProvincia) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idRegion: (_e = dato.idRegion) === null || _e === void 0 ? void 0 : _e.toHexString(),
            idZona: (_f = dato.idZona) === null || _f === void 0 ? void 0 : _f.toHexString(),
            //
            departamento: dato.departamento ? TrackPriceParserService.departamento(dato.departamento) : undefined,
            localidad: dato.localidad ? TrackPriceParserService.localidad(dato.localidad) : undefined,
            provincia: dato.provincia ? TrackPriceParserService.provincia(dato.provincia) : undefined,
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static ubicacionesRelevamiento(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.ubicacionRelevamiento(dato));
        }
        return dto;
    }
    static relevamiento(dato) {
        var _a, _b, _c;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            campAgricola: dato.campAgricola,
            condicionComercial: dato.condicionComercial,
            disponibilidad: dato.disponibilidad,
            fecha: (_b = dato.fecha) === null || _b === void 0 ? void 0 : _b.toISOString(),
            fuente: dato.fuente,
            idCargador: (_c = dato.idCargador) === null || _c === void 0 ? void 0 : _c.toHexString(),
            observaciones: dato.observaciones,
            pago: dato.pago ? TrackPriceParserService.pagoRelevamiento(dato.pago) : undefined,
            producto: dato.producto ? TrackPriceParserService.productoRelevamiento(dato.producto) : undefined,
            ubicacion: dato.ubicacion ? TrackPriceParserService.ubicacionRelevamiento(dato.ubicacion) : undefined,
            tipoRelevamiento: dato.tipoRelevamiento,
            verificado: dato.verificado,
            //
            cargador: dato.cargador ? TrackPriceParserService.cargador(dato.cargador) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static relevamientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.relevamiento(dato));
        }
        return dto;
    }
}
exports.TrackPriceParserService = TrackPriceParserService;
