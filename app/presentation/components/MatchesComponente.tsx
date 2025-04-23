import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {AppColors} from "../theme/AppTheme";

const MatchesComponente = () => {
    return(
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>Teams</Text>
                <Text style={styles.title}>Winner</Text>
            </View>
            <View style={styles.body}>
                {/* Equipos (columna) */}
                <View style={styles.teamsColumn}>
                    <View style={styles.teamContainer}>
                        <Image source={require('../../../assets/usuario.png')} style={styles.circle}/>
                        <Text style={styles.teamName}>Equipo 1</Text>
                    </View>
                    <View style={styles.teamContainer}>
                        <Image source={require('../../../assets/usuario.png')} style={styles.circle}/>
                        <Text style={styles.teamName}>Equipo 2</Text>
                    </View>
                </View>

                {/* Ganador (centrado verticalmente al lado) */}
                <View style={styles.winnerContainer}>
                    <Image source={require('../../../assets/usuario.png')} style={styles.circle}/>
                    <Text style={styles.teamName}>Ganador</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.date}>22/04/2025</Text>
                <Text style={styles.date}>12:55</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: 10,
        backgroundColor: AppColors.backgroundSecondary,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    title: {
        color: AppColors.color,
        fontWeight: 'bold',
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    teamsColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
    },
    winnerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 6
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ccc',
        marginRight: 10,
    },
    teamName: {
        color: '#fff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    date: {
        color: AppColors.color,
        marginLeft: 10,
    },
});

export default MatchesComponente;