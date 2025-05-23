import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./app/presentation/views/auth/Login";
import BottomTabNavigator from "./app/presentation/navigation/BottomTabNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import TeamMembers from "./app/presentation/views/team-members/TeamMembers";
import {TeamsInterface} from "./app/domain/entities/Teams";

const Stack= createNativeStackNavigator<RootStackParamlist>();

export type RootStackParamlist = {
    Login: undefined,
    TeamMembers: { slug: string },
    BottomTabNavigator: undefined,
}

export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name={"Login"} component={Login}/>
              <Stack.Screen name={"TeamMembers"} component={TeamMembers}/>
              <Stack.Screen name={"BottomTabNavigator"} component={BottomTabNavigator}/>
            </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaProvider>
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
