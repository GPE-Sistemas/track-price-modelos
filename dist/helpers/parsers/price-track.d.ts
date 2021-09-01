import { LeanDocument } from 'mongoose';
import { IComposicionDb, IComposicionDTO, IDepartamentoDb, IDepartamentoDTO, IEmpresaDb, IEmpresaDTO, IFamiliaQuimicaDb, IFamiliaQuimicaDTO, ILocalidadDb, ILocalidadDTO, IOperadorDb, IOperadorDTO, IPagoRelevamientoDb, IPagoRelevamientoDTO, IPrincipioActivoDb, IPrincipioActivoDTO, IProductoDb, IProductoDTO, IProductoRelevamientoDb, IProductoRelevamientoDTO, IProvinciaDb, IProvinciaDTO, IRegionDb, IRegionDTO, IRelevamientoDb, IRelevamientoDTO, ISegmentoDb, ISegmentoDTO, ISubsegmentoDb, ISubsegmentoDTO, IUbicacionRelevamientoDb, IUbicacionRelevamientoDTO, IZonaDb, IZonaDTO } from '../../modelos';
export declare class TrackPriceParserService {
    static operador(dato: LeanDocument<IOperadorDb>): IOperadorDTO;
    static operadores(datos: LeanDocument<IOperadorDb>[]): IOperadorDTO[];
    static region(dato: LeanDocument<IRegionDb>): IRegionDTO;
    static regiones(datos: LeanDocument<IRegionDb>[]): IRegionDTO[];
    static zona(dato: LeanDocument<IZonaDb>): IZonaDTO;
    static zonas(datos: LeanDocument<IZonaDb>[]): IZonaDTO[];
    static provincia(dato: LeanDocument<IProvinciaDb>): IProvinciaDTO;
    static provincias(datos: LeanDocument<IProvinciaDb>[]): IProvinciaDTO[];
    static departamento(dato: LeanDocument<IDepartamentoDb>): IDepartamentoDTO;
    static departamentos(datos: LeanDocument<IDepartamentoDb>[]): IDepartamentoDTO[];
    static localidad(dato: LeanDocument<ILocalidadDb>): ILocalidadDTO;
    static localidades(datos: LeanDocument<ILocalidadDb>[]): ILocalidadDTO[];
    static empresa(dato: LeanDocument<IEmpresaDb>): IEmpresaDTO;
    static empresas(datos: LeanDocument<IEmpresaDb>[]): IEmpresaDTO[];
    static segmento(dato: LeanDocument<ISegmentoDb>): ISegmentoDTO;
    static segmentos(datos: LeanDocument<ISegmentoDb>[]): ISegmentoDTO[];
    static subsegmento(dato: LeanDocument<ISubsegmentoDb>): ISubsegmentoDTO;
    static subsegmentos(datos: LeanDocument<ISubsegmentoDb>[]): ISubsegmentoDTO[];
    static familiaQuimica(dato: LeanDocument<IFamiliaQuimicaDb>): IFamiliaQuimicaDTO;
    static familiasQuimicas(datos: LeanDocument<IFamiliaQuimicaDb>[]): IFamiliaQuimicaDTO[];
    static principioActivo(dato: LeanDocument<IPrincipioActivoDb>): IPrincipioActivoDTO;
    static principiosActivos(datos: LeanDocument<IPrincipioActivoDb>[]): IPrincipioActivoDTO[];
    static composicion(dato: LeanDocument<IComposicionDb>): IComposicionDTO;
    static composiciones(datos: LeanDocument<IComposicionDb>[]): IComposicionDTO[];
    static producto(dato: LeanDocument<IProductoDb>): IProductoDTO;
    static productos(datos: LeanDocument<IProductoDb>[]): IProductoDTO[];
    static pagoRelevamiento(dato: LeanDocument<IPagoRelevamientoDb>): IPagoRelevamientoDTO;
    static pagosRelevamiento(datos: LeanDocument<IPagoRelevamientoDb>[]): IPagoRelevamientoDTO[];
    static productoRelevamiento(dato: LeanDocument<IProductoRelevamientoDb>): IProductoRelevamientoDTO;
    static productosRelevamiento(datos: LeanDocument<IProductoRelevamientoDb>[]): IProductoRelevamientoDTO[];
    static ubicacionRelevamiento(dato: LeanDocument<IUbicacionRelevamientoDb>): IUbicacionRelevamientoDTO;
    static ubicacionesRelevamiento(datos: LeanDocument<IUbicacionRelevamientoDb>[]): IUbicacionRelevamientoDTO[];
    static relevamiento(dato: LeanDocument<IRelevamientoDb>): IRelevamientoDTO;
    static relevamientos(datos: LeanDocument<IRelevamientoDb>[]): IRelevamientoDTO[];
}
//# sourceMappingURL=price-track.d.ts.map