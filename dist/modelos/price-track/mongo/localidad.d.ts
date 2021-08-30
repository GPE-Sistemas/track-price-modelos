import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDb } from './departamento';
export interface ILocalidadDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: Types.ObjectId;
    departamento?: IDepartamentoDb;
}
export declare const SLocalidad: Schema<ILocalidadDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=localidad.d.ts.map