import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./app/presentation/views/auth/Login";
import BottomTabNavigator from "./app/presentation/navigation/BottomTabNavigator";
import {HomeScreen} from "./app/presentation/views/Home/HomeScreen";

const Stack= createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
    Login: undefined,
    BottomTabNavigator: undefined,
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={"Login"} component={Login}/>
          <Stack.Screen name={"BottomTabNavigator"} component={BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
