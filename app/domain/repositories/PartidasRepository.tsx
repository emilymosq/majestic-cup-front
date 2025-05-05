import { ApiResponse } from "../../data/sources/remote/models/ResponseApiDelivery";
import { MatchesInterface } from "../entities/Partidas";

export interface PartidasRepository{
    getPartidas: () => Promise<MatchesInterface[]>;
}