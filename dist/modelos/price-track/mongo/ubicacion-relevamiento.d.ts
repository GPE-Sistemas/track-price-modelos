import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDb } from './departamento';
import { ILocalidadDb } from './localidad';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';
export interface IUbicacionRelevamientoDb extends Document {
    coordenadas: ICoordenadas;
    idRegion: Types.ObjectId;
    idZona: Types.ObjectId;
    idProvincia: Types.ObjectId;
    idDepartamento: Types.ObjectId;
    idLocalidad: Types.ObjectId;
    region?: IRegionDb;
    zona?: IZonaDb;
    provincia?: IProvinciaDb;
    departamento?: IDepartamentoDb;
    localidad?: ILocalidadDb;
}
export declare const SUbicacionRelevamiento: Schema<IUbicacionRelevamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=ubicacion-relevamiento.d.ts.map