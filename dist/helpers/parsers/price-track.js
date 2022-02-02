"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackPriceParserService = void 0;
class TrackPriceParserService {
    // Usuarios
    static operador(dato) {
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
            idsDepartamento: (_d = dato.idsDepartamento) === null || _d === void 0 ? void 0 : _d.map((id) => id.toHexString()),
            idsZona: (_e = dato.idsZona) === null || _e === void 0 ? void 0 : _e.map((id) => id.toHexString()),
            idsProvincia: (_f = dato.idsProvincia) === null || _f === void 0 ? void 0 : _f.map((id) => id.toHexString()),
            idsRegion: (_g = dato.idsRegion) === null || _g === void 0 ? void 0 : _g.map((id) => id.toHexString()),
            idsLocalidad: (_h = dato.idsLocalidad) === null || _h === void 0 ? void 0 : _h.map((id) => id.toHexString()),
            global: dato.global,
            //
            regiones: dato.regiones
                ? TrackPriceParserService.regiones(dato.regiones)
                : undefined,
            provincias: dato.provincias
                ? TrackPriceParserService.provincias(dato.provincias)
                : undefined,
            zonas: dato.zonas ? TrackPriceParserService.zonas(dato.zonas) : undefined,
            departamentos: dato.departamentos
                ? TrackPriceParserService.departamentos(dato.departamentos)
                : undefined,
            localidades: dato.localidades
                ? TrackPriceParserService.localidades(dato.localidades)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static operadores(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.operador(dato));
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
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            region: dato.region
                ? TrackPriceParserService.region(dato.region)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            region: dato.region
                ? TrackPriceParserService.region(dato.region)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
        var _a, _b, _c, _d;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idProvincia: (_b = dato.idProvincia) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idZona: (_c = dato.idZona) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idRegion: (_d = dato.idRegion) === null || _d === void 0 ? void 0 : _d.toHexString(),
            nombre: dato.nombre,
            //
            provincia: dato.provincia
                ? TrackPriceParserService.provincia(dato.provincia)
                : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
            region: dato.region
                ? TrackPriceParserService.region(dato.region)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
        var _a, _b, _c, _d, _e;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            coordenadas: dato.coordenadas,
            idDepartamento: (_b = dato.idDepartamento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idProvincia: (_c = dato.idProvincia) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idZona: (_d = dato.idZona) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idRegion: (_e = dato.idRegion) === null || _e === void 0 ? void 0 : _e.toHexString(),
            nombre: dato.nombre,
            //
            departamento: dato.departamento
                ? TrackPriceParserService.departamento(dato.departamento)
                : undefined,
            provincia: dato.provincia
                ? TrackPriceParserService.provincia(dato.provincia)
                : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
            region: dato.region
                ? TrackPriceParserService.region(dato.region)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            segmento: dato.segmento
                ? TrackPriceParserService.segmento(dato.segmento)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static subsegmentos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.subsegmento(dato));
        }
        return dto;
    }
    static subsegmentoPropio(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            idSegmento: (_b = dato.idSegmento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            segmento: dato.segmento
                ? TrackPriceParserService.segmento(dato.segmento)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static subsegmentosPropios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.subsegmentoPropio(dato));
        }
        return dto;
    }
    static familiaQuimica(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            nombreCorto: dato.nombreCorto,
            idFamiliaQuimica: (_b = dato.idFamiliaQuimica) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            familiaQuimica: dato.familiaQuimica
                ? TrackPriceParserService.familiaQuimica(dato.familiaQuimica)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            claseTox: dato.claseTox,
            unidad: dato.unidad,
            principal: dato.principal,
            //
            principioActivo: dato.principioActivo
                ? TrackPriceParserService.principioActivo(dato.principioActivo)
                : undefined,
            familiaQuimica: dato.familiaQuimica
                ? TrackPriceParserService.familiaQuimica(dato.familiaQuimica)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            composicion: dato.composicion
                ? TrackPriceParserService.composiciones(dato.composicion)
                : undefined,
            idsAgrupacion1: (_b = dato.idsAgrupacion1) === null || _b === void 0 ? void 0 : _b.map((id) => id.toHexString()),
            idsAgrupacion2: (_c = dato.idsAgrupacion2) === null || _c === void 0 ? void 0 : _c.map((id) => id.toHexString()),
            idEmpresa: (_d = dato.idEmpresa) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idSegmento: (_e = dato.idSegmento) === null || _e === void 0 ? void 0 : _e.toHexString(),
            idsSubsegmentos: (_f = dato.idsSubsegmentos) === null || _f === void 0 ? void 0 : _f.map((id) => id.toHexString()),
            idsSubsegmentosPropios: (_g = dato.idsSubsegmentosPropios) === null || _g === void 0 ? void 0 : _g.map((id) => id.toHexString()),
            idsCompetencias: (_h = dato.idsCompetencias) === null || _h === void 0 ? void 0 : _h.map((id) => id.toHexString()),
            idsComplementos: (_j = dato.idsComplementos) === null || _j === void 0 ? void 0 : _j.map((id) => id.toHexString()),
            idsSustitutos: (_k = dato.idsSustitutos) === null || _k === void 0 ? void 0 : _k.map((id) => id.toHexString()),
            sku: dato.sku,
            numeroRegistro: dato.numeroRegistro,
            tipo: dato.tipo,
            unidad: dato.unidad,
            formulacion: dato.formulacion,
            toxicidad: dato.toxicidad,
            dosisMedia: dato.dosisMedia,
            //
            empresa: dato.empresa
                ? TrackPriceParserService.empresa(dato.empresa)
                : undefined,
            segmento: dato.segmento
                ? TrackPriceParserService.segmento(dato.segmento)
                : undefined,
            subsegmentos: dato.subsegmentos
                ? TrackPriceParserService.subsegmentos(dato.subsegmentos)
                : undefined,
            subsegmentosPropios: dato.subsegmentosPropios
                ? TrackPriceParserService.subsegmentosPropios(dato.subsegmentosPropios)
                : undefined,
            competencias: dato.competencias
                ? TrackPriceParserService.productos(dato.competencias)
                : undefined,
            complementos: dato.complementos
                ? TrackPriceParserService.productos(dato.complementos)
                : undefined,
            sustitutos: dato.sustitutos
                ? TrackPriceParserService.productos(dato.sustitutos)
                : undefined,
            agrupacion1: dato.agrupacion1
                ? TrackPriceParserService.productos(dato.agrupacion1)
                : undefined,
            agrupacion2: dato.agrupacion2
                ? TrackPriceParserService.productos(dato.agrupacion2)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            precioContadoU$S: dato.precioContadoU$S,
            precioFinalU$S: dato.precioFinalU$S,
            volumen: dato.volumen,
            metodos: dato.metodos,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
        var _a, _b, _c, _d, _e, _f;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idEmpresa: (_b = dato.idEmpresa) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idProducto: (_c = dato.idProducto) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idSegmento: (_d = dato.idSegmento) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idsSubsegmentos: (_e = dato.idsSubsegmentos) === null || _e === void 0 ? void 0 : _e.map((id) => id.toHexString()),
            idsSubsegmentosPropios: (_f = dato.idsSubsegmentosPropios) === null || _f === void 0 ? void 0 : _f.map((id) => id.toHexString()),
            composicion: dato.composicion
                ? TrackPriceParserService.composiciones(dato.composicion)
                : undefined,
            numeroRegistro: dato.numeroRegistro,
            //
            empresa: dato.empresa
                ? TrackPriceParserService.empresa(dato.empresa)
                : undefined,
            segmento: dato.segmento
                ? TrackPriceParserService.segmento(dato.segmento)
                : undefined,
            subsegmentos: dato.subsegmentos
                ? TrackPriceParserService.subsegmentos(dato.subsegmentos)
                : undefined,
            producto: dato.producto
                ? TrackPriceParserService.producto(dato.producto)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            departamento: dato.departamento
                ? TrackPriceParserService.departamento(dato.departamento)
                : undefined,
            localidad: dato.localidad
                ? TrackPriceParserService.localidad(dato.localidad)
                : undefined,
            provincia: dato.provincia
                ? TrackPriceParserService.provincia(dato.provincia)
                : undefined,
            region: dato.region
                ? TrackPriceParserService.region(dato.region)
                : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
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
            idUsuario: (_c = dato.idUsuario) === null || _c === void 0 ? void 0 : _c.toHexString(),
            observaciones: dato.observaciones,
            pago: dato.pago
                ? TrackPriceParserService.pagoRelevamiento(dato.pago)
                : undefined,
            producto: dato.producto
                ? TrackPriceParserService.productoRelevamiento(dato.producto)
                : undefined,
            ubicacion: dato.ubicacion
                ? TrackPriceParserService.ubicacionRelevamiento(dato.ubicacion)
                : undefined,
            tipoRelevamiento: dato.tipoRelevamiento,
            verificado: dato.verificado,
            //
            operador: dato.operador
                ? TrackPriceParserService.operador(dato.operador)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static relevamientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.relevamiento(dato));
        }
        return dto;
    }
    // Grupos Comparativos
    static grupoComparativo(dato) {
        var _a, _b, _c;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            fecha: (_b = dato.fecha) === null || _b === void 0 ? void 0 : _b.toISOString(),
            idProductos: (_c = dato.idProductos) === null || _c === void 0 ? void 0 : _c.map((id) => id.toHexString()),
            productos: dato.productos
                ? TrackPriceParserService.productos(dato.productos)
                : undefined,
        };
        Object.keys(dto).forEach((key) => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static gruposComparativos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.grupoComparativo(dato));
        }
        return dto;
    }
}
exports.TrackPriceParserService = TrackPriceParserService;
