import {JugadorRepository} from "../../domain/repositories/JugadorRepository";
import {Jugador, JugadorList} from "../../domain/entities/Jugador";
import {AxiosError} from "axios";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";


export class JugadorRepositoryImpl implements JugadorRepository {

    async get_all_jugadores(slug:string): Promise<JugadorList> {
        try{
            const response = await ApiDelivery.get(`/jugadores/info/${slug}`)
            return Promise.resolve(response.data)
        }catch (error){
            let e = (error as AxiosError)
            console.log("Error" + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as JugadorList);

        }
    }
}