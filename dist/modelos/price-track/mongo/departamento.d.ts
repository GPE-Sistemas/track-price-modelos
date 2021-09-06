import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IProvinciaDb } from './provincia';
import { IRegionDb } from './region';
import { IZonaDb } from './zona';
export interface IDepartamentoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idZona: Types.ObjectId;
    idProvincia: Types.ObjectId;
    idRegion: Types.ObjectId;
    zona?: IZonaDb;
    provincia?: IProvinciaDb;
    region?: IRegionDb;
}
export declare const SDepartamento: Schema<IDepartamentoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=departamento.d.ts.map