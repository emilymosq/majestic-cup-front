import {JugadorRepositoryImpl} from "../../../data/repositories/JugadorRepository";

const {get_all_jugadores} = new JugadorRepositoryImpl()

export const GetAllJugadoresUseCase = async(slug:string) => {
    return await get_all_jugadores(slug)
}