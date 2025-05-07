import { ApiResponse } from "../../data/sources/remote/models/ResponseApiDelivery";
import {MatchesInterface, RouletteResponse} from "../entities/Partidas";

export interface PartidasRepository{
    getPartidas: () => Promise<MatchesInterface[]>;
    roulette: (slug: string) => Promise<RouletteResponse>;
}