import { Document, Schema, Types } from 'mongoose';
import { IFamiliaQuimicaDb } from './familia-quimica';

export interface IPrincipioActivoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    nombreCorto: string;
    idFamiliaQuimica: Types.ObjectId;
    //
    familiaQuimica?: IFamiliaQuimicaDb;
}

export const SPrincipioActivo = new Schema<IPrincipioActivoDb>({
    nombre: { type: String },
    nombreCorto: { type: String },
    idFamiliaQuimica: { type: Types.ObjectId, ref: 'familiasQuimicas' },
});

SPrincipioActivo.virtual('familiaQuimica', {
    foreignField: '_id',
    justOne: true,
    localField: 'idFamiliaQuimica',
    ref: 'familiasQuimicas',
});
