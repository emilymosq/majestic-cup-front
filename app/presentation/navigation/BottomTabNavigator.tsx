import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import TeamMembers from "../views/team-members/TeamMembers";
import Matches from "../views/matches/Matches";
import {HomeScreen} from "../views/Home/HomeScreen";
import Estadisticas from "../views/estadisticas/Estadisticas";
import Draft from "../views/draft/Draft";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#1A1A1C', borderTopWidth: 0,},
                    tabBarActiveTintColor: '#fff',
                }}
            >
                <Tab.Screen
                    name="Inicio"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Image
                                source={require('../../../assets/casa.png')}
                                style={{ width: size, height: size, tintColor: color }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Draft"
                    component={Draft}
                    options={{
                        tabBarLabel: 'Draft',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Image
                                source={require('../../../assets/juegos.png')}
                                style={{ width: size, height: size, tintColor: color }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Partidas"
                    component={Matches}
                    options={{
                        tabBarLabel: 'Partidas',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Image
                                source={require('../../../assets/torneo.png')}
                                style={{ width: size, height: size, tintColor: color }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Estadisticas"
                    component={Estadisticas}
                    options={{
                        tabBarLabel: 'Estadisticas',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Image
                                source={require('../../../assets/estadistico.png')}
                                style={{ width: size, height: size, tintColor: color }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
