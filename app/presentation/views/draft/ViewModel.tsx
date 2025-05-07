import react, {useEffect, useState} from "react";
import {PersonajeInterface} from "../../../domain/entities/Personaje";
import {rouletteUseCase} from "../../../domain/useCases/partidas/Roulette";
import {TeamsInterface} from "../../../domain/entities/Teams";

const API_BASE_URL = 'http://10.0.2.2:8000/';

export const useDraftViewModel = (slug: string) => {
    const [baneados, setBaneados] = useState<PersonajeInterface[]>([]);
    const [restantes, setRestantes] = useState<PersonajeInterface[]>([]);
    const [equipoElegido, setEquipoElegido] = useState<TeamsInterface | null>(null);

    const formatImg = (item: any) => ({
        ...item,
        imagen: API_BASE_URL + item.imagen
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await rouletteUseCase(slug);
            setBaneados(response.personajes_baneados.map(formatImg));
            setRestantes(response.personajes_restantes.map(formatImg));
            setEquipoElegido(formatImg(response.primer_equipo_elegir));
        };

        fetchData();
    }, [slug]);

    return {
        baneados,
        restantes,
        equipoElegido,
    };
};