import {useState} from "react";
import {MatchesInterface} from "../../../domain/entities/Partidas";
import {getPartidasUseCase} from "../../../domain/useCases/partidas/GetMatches";

export const MatchesViewModel = () => {
    const [partidas, setPartidas] = useState<MatchesInterface[]>([]);

    const getPartidas = async () => {
        try{
            const response = await getPartidasUseCase();
            console.log("Respuesta: ", response);
            setPartidas(response)
        } catch (error) {
            console.error("Error mostrando los eventos: ", error)
        }
    }

    return{
        partidas,
        getPartidas,
    }
}