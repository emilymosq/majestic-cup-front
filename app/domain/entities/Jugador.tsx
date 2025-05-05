import {TeamsInterface} from "./Teams";

export interface Jugador {
    id: number;
    nombre: string;
    nickname: string;
    equipo: TeamsInterface[];
    slug: string;
}

export type JugadorResponse = Pick <Jugador, 'nombre' | 'nickname' >

export interface JugadorList {
    success: JugadorResponse[]
}