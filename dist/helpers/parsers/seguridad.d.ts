import { LeanDocument } from 'mongoose';
import { IAlertaDb, IAlertaDTO, ICentroMonitoreoDb, ICentroMonitoreoDTO, ICiudadanoDb, ICiudadanoDTO, IOperarioDb, IOperarioDTO, IZonaDb, IZonaDTO } from '../../modelos';
export declare class SeguridadParserService {
    static alerta(dato: LeanDocument<IAlertaDb>): IAlertaDTO;
    static alertas(datos: LeanDocument<IAlertaDb>[]): IAlertaDTO[];
    static centroMonitoreo(dato: LeanDocument<ICentroMonitoreoDb>): ICentroMonitoreoDTO;
    static centrosMonitoreo(datos: LeanDocument<ICentroMonitoreoDb>[]): ICentroMonitoreoDTO[];
    static ciudadano(dato: LeanDocument<ICiudadanoDb>): ICiudadanoDTO;
    static ciudadanos(datos: LeanDocument<ICiudadanoDb>[]): ICiudadanoDTO[];
    static operario(dato: LeanDocument<IOperarioDb>): IOperarioDTO;
    static operarios(datos: LeanDocument<IOperarioDb>[]): IOperarioDTO[];
    static zona(dato: LeanDocument<IZonaDb>): IZonaDTO;
    static zonas(datos: LeanDocument<IZonaDb>[]): IZonaDTO[];
}
//# sourceMappingURL=seguridad.d.ts.map