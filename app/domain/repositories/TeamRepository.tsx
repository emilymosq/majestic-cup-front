import {TeamsInterface} from "../entities/Teams";

export interface TeamRepository{
    getTeams: () => Promise<TeamsInterface[]>;
}