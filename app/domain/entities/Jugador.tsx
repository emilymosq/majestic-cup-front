export interface Jugador {
    id: number;
    nombre: string;
    nickname: string;
//    equipo: Equipo;
    slug: string;
}

export type JugadorResponse = Pick <Jugador, 'nombre' | 'nickname' >

export interface JugadorList {
    success: JugadorResponse[]
}