import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {MatchesInterface, RouletteResponse} from "../../domain/entities/Partidas";
import {PartidasRepository} from "../../domain/repositories/PartidasRepository";

export class MatchesRepositoryImpl implements PartidasRepository{

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

    async roulette(slug: string): Promise<RouletteResponse> {
        try{
            const response = await ApiDelivery.get(`/partidas/ruleta-eliminadora/${slug}`);
            return Promise.resolve(response.data);
        }catch(error){
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}