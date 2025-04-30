import React from "react";
import {Text, View, Image} from "react-native";
import FormInput from "../../components/FormInput";
import styles from "./StylesLogin";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {LoginButton} from "../../components/LoginButton";

export function Login({navigation, route}: PropsStackNavigation) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

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
                    onPressFormInterface={(text) => setEmail(text)}

                ></FormInput>
                <FormInput
                    image={null}
                    text={"Contraseña"}
                    placeholder={""}
                    keyboardType="default"
                    secureTextEntry={true}
                    editable={true}
                    onPressFormInterface={(text) => setPassword(text)}

                ></FormInput>
                <View style={styles.buttonContainer}>
                    <LoginButton onPress={() => { navigation.navigate('BottomTabNavigator')}} text={"Entrar"}/>
                </View>
            </View>
        </View>
    );
}

export default Login;