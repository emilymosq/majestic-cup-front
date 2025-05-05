import {TeamRepositoryImpl} from "../../../data/repositories/TeamRepository";
import {TeamsInterface} from "../../entities/Teams";

const {getTeams} = new TeamRepositoryImpl();

export const getTeamsUseCase = async(): Promise<TeamsInterface[]> => {
    return await getTeams();
}