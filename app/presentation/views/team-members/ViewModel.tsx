import {useEffect, useState} from "react";
import {Jugador, JugadorResponse} from "../../../domain/entities/Jugador";
import {RootStackParamlist} from "../../../../App";
import {RouteProp, useRoute} from "@react-navigation/native";
import {GetAllJugadoresUseCase} from "../../../domain/useCases/jugador/GetAllJugadores";
import {TeamsInterface} from "../../../domain/entities/Teams";
import {getTeamsUseCase} from "../../../domain/useCases/teams/GetTeams";

type JugadorRouteProp = RouteProp<RootStackParamlist, 'TeamMembers'>

export const TeamMembersViewModel = () => {
    const [jugadores, setJugadores] = useState<JugadorResponse[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const route = useRoute<JugadorRouteProp>();
    const {slug} = route.params;
    const [teamName, setTeamName] = useState<string>("");

    const getJugadorList = async (slug: string) => {
        try {
            const response = await GetAllJugadoresUseCase(slug)
            console.log("RESULT" + JSON.stringify(response))
            setJugadores(response.success)
        } catch (error) {
            console.log("Error" + error);
            setErrorMessage("Error al obtener jugadores")
        }
    }

    const getTeamName = async (slug: string) => {
        try {
            const teams: TeamsInterface[] = await getTeamsUseCase();
            const team = teams.find(t => t.slug === slug);
            if (team) {
                setTeamName(team.nombre);
            } else {
                setTeamName("Nombre no encontrado");
            }
        } catch (error) {
            console.log("Error al obtener el nombre del equipo", error);
        }
    }

    useEffect(() => {
        getJugadorList(slug);
        getTeamName(slug);
    }, [slug]);

    return {
        jugadores,
        errorMessage,
        teamName,
    }
}