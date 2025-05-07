import {MatchesRepositoryImpl} from "../../../data/repositories/MatchesRepository";
import {MatchesInterface, RouletteResponse} from "../../entities/Partidas";

const {roulette} = new MatchesRepositoryImpl();

export const rouletteUseCase = async (slug: string): Promise<RouletteResponse>  => {
    return await roulette(slug);
}