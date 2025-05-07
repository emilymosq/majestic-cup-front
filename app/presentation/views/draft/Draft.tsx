import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
import {styles} from "./StylesDraft";
import {useDraftViewModel} from "./ViewModel";

const Draft = () => {
    const slug = 'HTvi8WnyU_RG4OjTCmY5mg'; // ⚠️ Reemplazá con el slug dinámico si es necesario
    const { baneados, restantes, equipoElegido } = useDraftViewModel(slug);
    // const equipo1Picks = restantes.filter((_, idx) => idx % 2 === 0);
    // const equipo2Picks = restantes.filter((_, idx) => idx % 2 !== 0);
    // const getFullImageUrl = (path: string) => `http://10.0.2.2:8000/${path}`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Draft</Text>
            <Text style={styles.subtitle}>Los 10 mandaos</Text>

            <View style={styles.grid}>
                {baneados.map((personaje, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{ uri: personaje.imagen }} style={styles.image} resizeMode="cover" />
                    </View>
                ))}
            </View>

            <View style={styles.teamSection}>
                <View style={styles.teamInfo}>
                    {equipoElegido ? (
                        <>
                            <Image source={{ uri: equipoElegido.imagen }} style={styles.imageTeam} />
                            <Text style={styles.teamTitle}>{equipoElegido.nombre}</Text>
                        </>
                    ) : (
                        <>
                            <Image source={require('../../../../assets/usuario.png')} style={styles.imageTeam} />
                            <Text style={styles.teamTitle}>Equipo 1</Text>
                        </>
                    )}
                </View>
                <View style={styles.teams}>
                    {Array(5).fill(null).map((_, idx) => (
                        <View key={idx} style={styles.imageContainer} />
                    ))}
                </View>
            </View>

            <View style={styles.ruletaRow}>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/ruleta.png')} style={styles.ruletaIcon} />
                </TouchableOpacity>
                <View style={styles.imageSelected}>
                    <Image source={require('../../../../assets/prueba.png')} style={styles.image} resizeMode="cover" />
                </View>
            </View>

            <View style={styles.teamSection}>
                <View style={styles.teamInfo}>
                    <Image source={require('../../../../assets/usuario.png')} style={styles.imageTeam} />
                    <Text style={styles.teamTitle}>Equipo 2</Text>
                </View>
                <View style={styles.teams}>
                    {Array(5).fill(null).map((_, idx) => (
                        <View key={idx} style={styles.imageContainer} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Draft;