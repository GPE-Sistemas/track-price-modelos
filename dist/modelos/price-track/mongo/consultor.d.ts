import { Document, Schema, Types } from 'mongoose';
import { IUsuarioDb } from '../../admin';
import { IDepartamentoDb } from './departamento';
import { ILocalidadDb } from './localidad';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';
export interface IConsultorDb extends Document, IUsuarioDb {
    _id: Types.ObjectId;
    idUsuario: Types.ObjectId;
    idsZona: Types.ObjectId[];
    idsRegion: Types.ObjectId[];
    idsProvincia: Types.ObjectId[];
    idsDepartamento: Types.ObjectId[];
    idsLocalidad: Types.ObjectId[];
    global: boolean;
    zonas?: IZonaDb[];
    regiones?: IRegionDb[];
    provincias?: IProvinciaDb[];
    departamentos?: IDepartamentoDb[];
    localidades?: ILocalidadDb[];
}
export declare const SConsultor: Schema<IConsultorDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=consultor.d.ts.map