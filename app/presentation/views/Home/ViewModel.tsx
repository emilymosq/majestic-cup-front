import {useState} from "react";
import {TeamsInterface} from "../../../domain/entities/Teams";
import {getTeamsUseCase} from "../../../domain/useCases/teams/GetTeams";

export const TeamViewModel = () => {
    const [teams, setTeams] = useState<TeamsInterface[]>([]);

    const getTeams = async () => {
        try{
            const response = await getTeamsUseCase();
            setTeams(response);
        }catch (error) {
            console.error("Error mostrando los eventos: ", error)
        }
    }

    return{
        teams,
        getTeams
    }
}