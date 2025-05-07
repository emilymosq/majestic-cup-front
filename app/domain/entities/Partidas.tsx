import {TeamsInterface} from "./Teams";
import {PersonajeInterface} from "./Personaje";

export interface MatchesInterface {
    id?: number;
    equipo1: TeamsInterface;
    equipo2: TeamsInterface;
    fecha: Date | string;
    primer_equipo_elegir?: string;
    ganador: string;
    personajes_baneados?: string[];
    slug: string;
    is_active: boolean;
}

export interface RouletteResponse {
    primer_equipo_elegir: TeamsInterface;
    personajes_baneados: PersonajeInterface[];
    personajes_restantes: PersonajeInterface[];
}
