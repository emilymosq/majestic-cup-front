import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";
import {TeamRepository} from "../../domain/repositories/TeamRepository";
import {TeamsInterface} from "../../domain/entities/Teams";

export class TeamRepositoryImpl implements TeamRepository{
    async getTeams(): Promise<TeamsInterface[]> {
        try{
            const response = await ApiDelivery.get('/equipos/getAll');
            return Promise.resolve(response.data.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error respuesta: ", e.response?.data);
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }
}