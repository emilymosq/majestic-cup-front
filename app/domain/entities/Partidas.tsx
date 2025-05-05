import {TeamsInterface} from "./Teams";

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

