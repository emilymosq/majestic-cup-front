import {ApiResponse} from "../../data/sources/remote/models/ResponseApiDelivery";
import {JugadorList} from "../entities/Jugador";

export interface JugadorRepository {
    get_all_jugadores(slug:string): Promise<JugadorList>;
}