import { LeanDocument } from 'mongoose';
import { IClienteDb, IClienteDTO, IUsuarioDb, IUsuarioDTO } from '../../modelos';
export declare class AdminParserService {
    static usuario(dato: LeanDocument<IUsuarioDb>): IUsuarioDTO;
    static usuarios(datos: LeanDocument<IUsuarioDb>[]): IUsuarioDTO[];
    static cliente(dato: LeanDocument<IClienteDb>): IClienteDTO;
    static clientes(datos: LeanDocument<IClienteDb>[]): IClienteDTO[];
}
//# sourceMappingURL=admin.d.ts.map