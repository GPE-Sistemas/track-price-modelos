import { Document, Schema, Types } from 'mongoose';
import { IFamiliaQuimicaDb } from './familia-quimica';
import { IPrincipioActivoDb } from './principio-activo';

export interface IComposicionDb extends Document {
    // Composicion
    _id: Types.ObjectId;
    idFamiliaQuimica: Types.ObjectId;
    idPrincipioActivo: Types.ObjectId;
    concentracion: number;
    formulacion: string;
    claseTox: string;
    unidad: string;
    principal: boolean;
    // Populate
    familiaQuimica?: IFamiliaQuimicaDb;
    principioActivo?: IPrincipioActivoDb;
}

export const SComposicion = new Schema<IComposicionDb>({
    idFamiliaQuimica: { type: Types.ObjectId, ref: 'familiasQuimicas' },
    idPrincipioActivo: { type: Types.ObjectId, ref: 'principiosActivos' },
    concentracion: { type: Number },
    formulacion: { type: String },
    claseTox: { type: String },
    unidad: { type: String },
    principal: { type: Boolean },
});

SComposicion.virtual('familiaQuimica', {
    foreignField: '_id',
    justOne: true,
    localField: 'idFamiliaQuimica',
    ref: 'familiasQuimicas',
});

SComposicion.virtual('principioActivo', {
    foreignField: '_id',
    justOne: true,
    localField: 'idPrincipioActivo',
    ref: 'principiosActivos',
});
