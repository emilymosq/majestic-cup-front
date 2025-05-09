import {UserLogin} from "../../entities/User";
import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";


const {save} = new UserLocalRepositoryImpl();

export const SaveUserUseCase = async (user: UserLogin) => {
    return await save(user)
}
