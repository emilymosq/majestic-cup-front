import {useState} from "react";
import {UserLogin, UserLoginInterface} from "../../../domain/entities/User";
import {loginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";
import {SaveUserUseCase} from "../../../domain/useCases/userLocal/SaveUser";



const LoginViewModel = () => {

    const [errorMessage, setErrorMessage] =  useState<string>("");
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const {user, getUserSession} = useUserLocalStorage();

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const login = async () => {
        if (validateForm()) {
            const response = await loginAuthUseCase(values as UserLoginInterface)
            if (!response.success) {
                setErrorMessage(response.message)
            }
            else {
                await SaveUserUseCase(response.data as UserLogin)
                getUserSession()
            }
        }
    }

    const validateForm = () => {
        if (values.email === "") {
            setErrorMessage("El correo es obligatorio");
            return false
        }
        if (values.password === "") {
            setErrorMessage("La contraseña es obligatorio");
            return false;
        }
        return true;
    }

    return {
        ...values,
        onChangeLogin,
        login,
        errorMessage,
        user
    }
}

}