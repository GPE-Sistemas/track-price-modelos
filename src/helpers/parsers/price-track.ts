import { LeanDocument } from 'mongoose';
import { IComposicionDb, IComposicionDTO, IDepartamentoDb, IDepartamentoDTO, IEmpresaDb, IEmpresaDTO, IFamiliaQuimicaDb, IFamiliaQuimicaDTO, ILocalidadDb, ILocalidadDTO, IOperadorDb, IOperadorDTO, IPagoRelevamientoDb, IPagoRelevamientoDTO, IPrincipioActivoDb, IPrincipioActivoDTO, IProductoDb, IProductoDTO, IProductoRelevamientoDb, IProductoRelevamientoDTO, IProvinciaDb, IProvinciaDTO, IRegionDb, IRegionDTO, IRelevamientoDb, IRelevamientoDTO, ISegmentoDb, ISegmentoDTO, ISubsegmentoDb, ISubsegmentoDTO, IUbicacionRelevamientoDb, IUbicacionRelevamientoDTO, IZonaDb, IZonaDTO } from '../../modelos';

export class TrackPriceParserService {

    // Usuarios

    static operador(dato: LeanDocument<IOperadorDb>): IOperadorDTO {
        const dto: IOperadorDTO = {
            // Usuario
            _id: dato._id?.toHexString(),
            activo: dato.activo,
            apellido: dato.apellido,
            dni: dato.dni,
            email: dato.email,
            idCliente: dato.idCliente?.toHexString(),
            nombre: dato.nombre,
            pais: dato.pais,
            rol: dato.rol,
            telefono: dato.telefono,
            usuario: dato.usuario,
            //
            idUsuario: dato.idUsuario?.toHexString(),
            idsDepartamento: dato.idsDepartamento?.map( id => id.toHexString()),
            idsZona: dato.idsZona?.map( id => id.toHexString()),
            idsProvincia: dato.idsProvincia?.map( id => id.toHexString()),
            idsRegion: dato.idsRegion?.map( id => id.toHexString()),
            idsLocalidad: dato.idsLocalidad?.map( id => id.toHexString()),
            global: dato.global,
            //
            regiones: dato.regiones ? TrackPriceParserService.regiones(dato.regiones) : undefined,
            provincias: dato.provincias ? TrackPriceParserService.provincias(dato.provincias) : undefined,
            zonas: dato.zonas ? TrackPriceParserService.zonas(dato.zonas) : undefined,
            departamentos: dato.departamentos ? TrackPriceParserService.departamentos(dato.departamentos) : undefined,
            localidades: dato.localidades ? TrackPriceParserService.localidades(dato.localidades) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static operadores(datos: LeanDocument<IOperadorDb>[]): IOperadorDTO[] {
        const dto: IOperadorDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.operador(dato));
        }
        return dto;
    }

    // Zonas

    static region(dato: LeanDocument<IRegionDb>): IRegionDTO {
        const dto: IRegionDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            coordenadas: dato.coordenadas,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static regiones(datos: LeanDocument<IRegionDb>[]): IRegionDTO[] {
        const dto: IRegionDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.region(dato));
        }
        return dto;
    }
    static zona(dato: LeanDocument<IZonaDb>): IZonaDTO {
        const dto: IZonaDTO = {
            _id: dato._id?.toHexString(),
            coordenadas: dato.coordenadas,
            idRegion: dato.idRegion?.toHexString(),
            nombre: dato.nombre,
            //
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static zonas(datos: LeanDocument<IZonaDb>[]): IZonaDTO[] {
        const dto: IZonaDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.zona(dato));
        }
        return dto;
    }
    static provincia(dato: LeanDocument<IProvinciaDb>): IProvinciaDTO {
        const dto: IProvinciaDTO = {
            _id: dato._id?.toHexString(),
            coordenadas: dato.coordenadas,
            idRegion: dato.idRegion?.toHexString(),
            nombre: dato.nombre,
            //
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static provincias(datos: LeanDocument<IProvinciaDb>[]): IProvinciaDTO[] {
        const dto: IProvinciaDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.provincia(dato));
        }
        return dto;
    }
    static departamento(dato: LeanDocument<IDepartamentoDb>): IDepartamentoDTO {
        const dto: IDepartamentoDTO = {
            _id: dato._id?.toHexString(),
            coordenadas: dato.coordenadas,
            idProvincia: dato.idProvincia?.toHexString(),
            idZona: dato.idZona?.toHexString(),
            idRegion: dato.idRegion?.toHexString(),
            nombre: dato.nombre,
            //
            provincia: dato.provincia ? TrackPriceParserService.provincia(dato.provincia) : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static departamentos(datos: LeanDocument<IDepartamentoDb>[]): IDepartamentoDTO[] {
        const dto: IDepartamentoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.departamento(dato));
        }
        return dto;
    }
    static localidad(dato: LeanDocument<ILocalidadDb>): ILocalidadDTO {
        const dto: ILocalidadDTO = {
            _id: dato._id?.toHexString(),
            coordenadas: dato.coordenadas,
            idDepartamento: dato.idDepartamento?.toHexString(),
            idProvincia: dato.idProvincia?.toHexString(),
            idZona: dato.idZona?.toHexString(),
            idRegion: dato.idRegion?.toHexString(),
            nombre: dato.nombre,
            //
            departamento: dato.departamento ? TrackPriceParserService.departamento(dato.departamento) : undefined,
            provincia: dato.provincia ? TrackPriceParserService.provincia(dato.provincia) : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static localidades(datos: LeanDocument<ILocalidadDb>[]): ILocalidadDTO[] {
        const dto: ILocalidadDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.localidad(dato));
        }
        return dto;
    }

    // Productos
    static empresa(dato: LeanDocument<IEmpresaDb>): IEmpresaDTO {
        const dto: IEmpresaDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            propia: dato.propia,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static empresas(datos: LeanDocument<IEmpresaDb>[]): IEmpresaDTO[] {
        const dto: IEmpresaDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.empresa(dato));
        }
        return dto;
    }
    static segmento(dato: LeanDocument<ISegmentoDb>): ISegmentoDTO {
        const dto: ISegmentoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,

        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static segmentos(datos: LeanDocument<ISegmentoDb>[]): ISegmentoDTO[] {
        const dto: ISegmentoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.segmento(dato));
        }
        return dto;
    }
    static subsegmento(dato: LeanDocument<ISubsegmentoDb>): ISubsegmentoDTO {
        const dto: ISubsegmentoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            idSegmento: dato.idSegmento?.toHexString(),
            //
            segmento: dato.segmento ? TrackPriceParserService.segmento(dato.segmento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static subsegmentos(datos: LeanDocument<ISubsegmentoDb>[]): ISubsegmentoDTO[] {
        const dto: ISubsegmentoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.subsegmento(dato));
        }
        return dto;
    }
    static familiaQuimica(dato: LeanDocument<IFamiliaQuimicaDb>): IFamiliaQuimicaDTO {
        const dto: IFamiliaQuimicaDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static familiasQuimicas(datos: LeanDocument<IFamiliaQuimicaDb>[]): IFamiliaQuimicaDTO[] {
        const dto: IFamiliaQuimicaDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.familiaQuimica(dato));
        }
        return dto;
    }
    static principioActivo(dato: LeanDocument<IPrincipioActivoDb>): IPrincipioActivoDTO {
        const dto: IPrincipioActivoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            idFamiliaQuimica: dato.idFamiliaQuimica?.toHexString(),
            //
            familiaQuimica: dato.familiaQuimica ? TrackPriceParserService.familiaQuimica(dato.familiaQuimica) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static principiosActivos(datos: LeanDocument<IPrincipioActivoDb>[]): IPrincipioActivoDTO[] {
        const dto: IPrincipioActivoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.principioActivo(dato));
        }
        return dto;
    }
    static composicion(dato: LeanDocument<IComposicionDb>): IComposicionDTO {
        const dto: IComposicionDTO = {
            _id: dato._id?.toHexString(),
            idPrincipioActivo: dato.idPrincipioActivo?.toHexString(),
            idFamiliaQuimica: dato.idFamiliaQuimica?.toHexString(),
            concentracion: dato.concentracion,
            formulacion: dato.formulacion,
            //
            principioActivo: dato.principioActivo ? TrackPriceParserService.principioActivo(dato.principioActivo) : undefined,
            familiaQuimica: dato.familiaQuimica ? TrackPriceParserService.familiaQuimica(dato.familiaQuimica) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static composiciones(datos: LeanDocument<IComposicionDb>[]): IComposicionDTO[] {
        const dto: IComposicionDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.composicion(dato));
        }
        return dto;
    }
    static producto(dato: LeanDocument<IProductoDb>): IProductoDTO {
        const dto: IProductoDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            composicion: dato.composicion ? TrackPriceParserService.composiciones(dato.composicion) : undefined,
            idEmpresa: dato.idEmpresa?.toHexString(),
            idSegmento: dato.idSegmento?.toHexString(),
            idsSubsegmento: dato.idsSubsegmento?.map( id => id.toHexString()),
            idsCompetencias: dato.idsCompetencias?.map( id => id.toHexString()),
            idsComplementos: dato.idsComplementos?.map( id => id.toHexString()),
            idsSustitutos: dato.idsSustitutos?.map( id => id.toHexString()),
            sku: dato.sku,
            tipo: dato.tipo,
            unidad: dato.unidad,
            //
            empresa: dato.empresa ? TrackPriceParserService.empresa(dato.empresa) : undefined,
            segmento: dato.segmento ? TrackPriceParserService.segmento(dato.segmento) : undefined,
            subsegmentos: dato.subsegmentos ? TrackPriceParserService.subsegmentos(dato.subsegmentos) : undefined,
            competencias: dato.competencias ? TrackPriceParserService.productos(dato.competencias) : undefined,
            complementos: dato.complementos ? TrackPriceParserService.productos(dato.complementos) : undefined,
            sustitutos: dato.sustitutos ? TrackPriceParserService.productos(dato.sustitutos) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static productos(datos: LeanDocument<IProductoDb>[]): IProductoDTO[] {
        const dto: IProductoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.producto(dato));
        }
        return dto;
    }

    // Relevamientos

    static pagoRelevamiento(dato: LeanDocument<IPagoRelevamientoDb>): IPagoRelevamientoDTO {
        const dto: IPagoRelevamientoDTO = {
            _id: dato._id?.toHexString(),
            metodos: dato.metodos,
            plazoDias: dato.plazoDias,
            precioU$S: dato.precioU$S,
            tasa: dato.tasa,
            volumen: dato.volumen,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static pagosRelevamiento(datos: LeanDocument<IPagoRelevamientoDb>[]): IPagoRelevamientoDTO[] {
        const dto: IPagoRelevamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.pagoRelevamiento(dato));
        }
        return dto;
    }
    static productoRelevamiento(dato: LeanDocument<IProductoRelevamientoDb>): IProductoRelevamientoDTO {
        const dto: IProductoRelevamientoDTO = {
            _id: dato._id?.toHexString(),
            idEmpresa: dato.idEmpresa?.toHexString(),
            idProducto: dato.idProducto?.toHexString(),
            idSegmento: dato.idSegmento?.toHexString(),
            idsSubsegmentos: dato.idsSubsegmentos?.map( id => id.toHexString()),            
            idsFamiliasQuimicas: dato.idsFamiliasQuimicas?.map( id => id.toHexString()),            
            idsPrincipiosActivos: dato.idsPrincipiosActivos?.map( id => id.toHexString()),            
            //
            empresa: dato.empresa ? TrackPriceParserService.empresa(dato.empresa) : undefined,
            segmento: dato.segmento ? TrackPriceParserService.segmento(dato.segmento) : undefined,
            subsegmentos: dato.subsegmentos ? TrackPriceParserService.subsegmentos(dato.subsegmentos) : undefined,
            familiasQuimicas: dato.familiasQuimicas ? TrackPriceParserService.familiasQuimicas(dato.familiasQuimicas) : undefined,
            principiosActivos: dato.principiosActivos ? TrackPriceParserService.principiosActivos(dato.principiosActivos) : undefined,
            producto: dato.producto ? TrackPriceParserService.producto(dato.producto) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static productosRelevamiento(datos: LeanDocument<IProductoRelevamientoDb>[]): IProductoRelevamientoDTO[] {
        const dto: IProductoRelevamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.productoRelevamiento(dato));
        }
        return dto;
    }
    static ubicacionRelevamiento(dato: LeanDocument<IUbicacionRelevamientoDb>): IUbicacionRelevamientoDTO {
        const dto: IUbicacionRelevamientoDTO = {
            _id: dato._id?.toHexString(),
            coordenadas: dato.coordenadas,
            idDepartamento: dato.idDepartamento?.toHexString(),
            idLocalidad: dato.idLocalidad?.toHexString(),
            idProvincia: dato.idProvincia?.toHexString(),
            idRegion: dato.idRegion?.toHexString(),
            idZona: dato.idZona?.toHexString(),
            //
            departamento: dato.departamento ? TrackPriceParserService.departamento(dato.departamento) : undefined,
            localidad: dato.localidad ? TrackPriceParserService.localidad(dato.localidad) : undefined,
            provincia: dato.provincia ? TrackPriceParserService.provincia(dato.provincia) : undefined,
            region: dato.region ? TrackPriceParserService.region(dato.region) : undefined,
            zona: dato.zona ? TrackPriceParserService.zona(dato.zona) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static ubicacionesRelevamiento(datos: LeanDocument<IUbicacionRelevamientoDb>[]): IUbicacionRelevamientoDTO[] {
        const dto: IUbicacionRelevamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.ubicacionRelevamiento(dato));
        }
        return dto;
    }
    static relevamiento(dato: LeanDocument<IRelevamientoDb>): IRelevamientoDTO {
        const dto: IRelevamientoDTO = {
            _id: dato._id?.toHexString(),
            campAgricola: dato.campAgricola,
            condicionComercial: dato.condicionComercial,
            disponibilidad: dato.disponibilidad,
            fecha: dato.fecha?.toISOString(),
            fuente: dato.fuente,
            idOperador: dato.idOperador?.toHexString(),
            observaciones: dato.observaciones,
            pago: dato.pago ? TrackPriceParserService.pagoRelevamiento(dato.pago) : undefined,
            producto: dato.producto ? TrackPriceParserService.productoRelevamiento(dato.producto) : undefined,
            ubicacion: dato.ubicacion ? TrackPriceParserService.ubicacionRelevamiento(dato.ubicacion) : undefined,
            tipoRelevamiento: dato.tipoRelevamiento,
            verificado: dato.verificado,
            //
            operador: dato.operador ? TrackPriceParserService.operador(dato.operador) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static relevamientos(datos: LeanDocument<IRelevamientoDb>[]): IRelevamientoDTO[] {
        const dto: IRelevamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(TrackPriceParserService.relevamiento(dato));
        }
        return dto;
    }
   
}
