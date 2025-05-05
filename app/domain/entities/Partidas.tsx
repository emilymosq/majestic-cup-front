export interface MatchesInterface {
    id?: number;
    equipo1: string;
    equipo2: string;
    fecha: Date | string;
    primer_equipo_elegir?: string;
    ganador: string;
    personajes_baneados?: string[];
    slug: string;
    is_active: boolean;
}

