import React, {useEffect} from "react";
import {Text, View, Image, ToastAndroid} from "react-native";
import FormInput from "../../components/FormInput";
import styles from "./StylesLogin";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {LoginButton} from "../../components/LoginButton";
import viewModel from "./ViewModel";
import LoginViewModel from "./ViewModel";


export function LoginScreen({navigation, route}: PropsStackNavigation) {

    const {email, password, onChangeLogin, login, errorMessage, user} = LoginViewModel();

    useEffect(() => {
            if (errorMessage != "")
                ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        },
        [errorMessage])

    useEffect(() => {
        if (user && user?.token) {
            navigation.replace("BottomTabNavigator")
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    //source={require('../../../../assets/')}
                ></Image>
            </View>
            <Text style={styles.title}>¡Bienvenido! </Text>
            <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>

            <View style={styles.formContainer}>

                <FormInput
                    image={null}
                    text={"Correo eletrónico"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={false}
                    editable={true}
                    onPressFormInterface={(text) => onChangeLogin('email', text)}

                ></FormInput>
                <FormInput
                    image={null}
                    text={"Contraseña"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={true}
                    editable={true}
                    onPressFormInterface={(text) => onChangeLogin('password', text)}

                ></FormInput>
                <View style={styles.buttonContainer}>
                    <LoginButton onPress={() => { navigation.navigate('BottomTabNavigator')}} text={"Entrar"}/>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;