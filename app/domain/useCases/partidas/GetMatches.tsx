import {MatchesRepositoryImpl} from "../../../data/repositories/MatchesRepository";
import {MatchesInterface} from "../../entities/Partidas";

const {getPartidas} = new MatchesRepositoryImpl();

export const getPartidasUseCase = async (): Promise<MatchesInterface[]>  => {
    return await getPartidas();
}