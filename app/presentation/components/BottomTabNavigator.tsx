import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: '#1A1A1C' },
                    tabBarActiveTintColor: '#fff',
                }}
            >
                <Tab.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        tabBarLabel: 'Inicio',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Draft"
                    component={Draft}
                    options={{
                        tabBarLabel: 'Draft',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="draft" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Partidas"
                    component={Partidas}
                    options={{
                        tabBarLabel: 'Partidas',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="torney" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Estadisticas"
                    component={Estadisticas}
                    options={{
                        tabBarLabel: 'Estadisticas',
                        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                            <Icon name="statistic" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

function Home() {
    return (
        <View style={styles.container}>
            <Text>Favoritos!</Text>
        </View>
    );
}
function Draft() {
    return (
        <View style={styles.container}>
            <Text>Favoritos!</Text>
        </View>
    );
}
function Partidas() {
    return (
        <View style={styles.container}>
            <Text>Favoritos!</Text>
        </View>
    );
}
function Estadisticas() {
    return (
        <View style={styles.container}>
            <Text>Agregar!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
