import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDb } from './departamento';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';
export interface ILocalidadDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: Types.ObjectId;
    idProvincia: Types.ObjectId;
    idZona: Types.ObjectId;
    idRegion: Types.ObjectId;
    departamento?: IDepartamentoDb;
    provincia?: IProvinciaDb;
    zona?: IZonaDb;
    region?: IRegionDb;
}
export declare const SLocalidad: Schema<ILocalidadDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=localidad.d.ts.map