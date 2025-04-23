import React from "react";
import {Button, Text, View} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";

const Login = ({navigation, route}: PropsStackNavigation) => {
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>Login</Text>
            <Button title={"Entrar"} onPress={()=>{
                navigation.navigate('BottomTabNavigator')
            }}/>
        </View>
    )
}

export default Login;