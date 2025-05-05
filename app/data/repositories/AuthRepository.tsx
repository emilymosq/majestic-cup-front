import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {UserLoginInterface} from "../../domain/entities/User";
import {ApiDeliveryResponse} from "../sources/remote/models/ResponseApiDelivery";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";


export class AuthRepositoryImpl implements AuthRepository {

    async login(user: UserLoginInterface): Promise<ApiDeliveryResponse> {
        try {
            const response = await ApiDelivery.post("/users/login", user)
            return Promise.resolve(response.data)
        }
        catch (error) {
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse)
        }
    }



}