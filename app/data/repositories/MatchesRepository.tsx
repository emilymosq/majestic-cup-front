import {ApiResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {MatchesInterface} from "../../domain/entities/Partidas";

export class MatchesRepositoryImpl{

    async getPartidas(): Promise<MatchesInterface[]> {
        try {
            const response = await ApiDelivery.get(`/partidas`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            const e = error as AxiosError;
            console.error("Error en la respuesta:", e.response?.data);
            throw new Error("No se pudieron obtener las partidas.");
        }
    }
}