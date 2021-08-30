import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IDepartamentoDb } from './departamento';

export interface ILocalidadDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas[];
    idDepartamento: Types.ObjectId;
    //
    departamento?: IDepartamentoDb;
}

export const SLocalidad = new Schema<ILocalidadDb>({
    nombre: { type: String },
    coordenadas: [{ type: Object }],
    idDepartamento: { type: Types.ObjectId, ref: 'departamentos' },
});

SLocalidad.virtual('departamento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDepartamento',
    ref: 'departamentos',
});
