import {useEffect, useState} from "react";
import {Jugador, JugadorResponse} from "../../../domain/entities/Jugador";
import {RootStackParamlist} from "../../../../App";
import {RouteProp, useRoute} from "@react-navigation/native";
import {GetAllJugadoresUseCase} from "../../../domain/useCases/jugador/GetAllJugadores";

type JugadorRouteProp = RouteProp<RootStackParamlist, 'TeamMembers'>

export const TeamMembersViewModel = () => {
    const [jugadores, setJugadores] = useState<JugadorResponse[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const route = useRoute<JugadorRouteProp>();
    const {slug} = route.params;

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
    useEffect(() => {
        getJugadorList(slug);
    }, [slug]);

    return {
        jugadores,
        errorMessage,
    }
}