import {UserLoginInterface} from "../entities/User";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";


export interface AuthRepository {
    login: (user: UserLoginInterface) => Promise<ApiDeliveryResponse>;

}