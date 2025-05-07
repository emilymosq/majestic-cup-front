import {TeamsInterface} from "./Teams";

export interface RedSocial{
    red: number;
    link: string;
    red_nombre: string;
    red_icono: string;
}

export interface Jugador {
    id: number;
    nombre: string;
    nickname: string;
    equipo: TeamsInterface[];
    red_social: RedSocial[];
    slug: string;
}

export type JugadorResponse = Pick <Jugador, 'nombre' | 'nickname' | 'red_social' | 'equipo'>

export interface JugadorList {
    success: JugadorResponse[]
}