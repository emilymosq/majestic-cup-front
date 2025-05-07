import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from "./StylesDraft";
import {useDraftViewModel} from "./ViewModel";
import {PersonajeInterface} from "../../../domain/entities/Personaje";

const Draft = () => {
    const slug = 'HTvi8WnyU_RG4OjTCmY5mg';
    const { baneados, restantes, equipoElegido } = useDraftViewModel(slug);

    const [turno, setTurno] = useState(0);
    const [equipo1, setEquipo1] = useState<PersonajeInterface[]>([]);
    const [equipo2, setEquipo2] = useState<PersonajeInterface[]>([]);


    const handleNextPick = () => {
        if (turno < restantes.length) {
            const personaje = restantes[turno];

            if (turno % 2 === 0) {
                setEquipo1(prev => [...prev, personaje]);
            } else {
                setEquipo2(prev => [...prev, personaje]);
            }

            setTurno(prev => prev + 1);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Draft</Text>
            <Text style={styles.subtitle}>Los 10 mandaos</Text>

            <View style={styles.grid}>
                {baneados.map((personaje, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image
                            source={{ uri: personaje.imagen }}
                            style={styles.image}
                            resizeMode="cover"
                        />
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
                    {equipo1.map((personaje, idx) => (
                        <View key={idx} style={styles.imageContainer}>
                            <Image
                                source={{ uri: personaje.imagen }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ruletaRow}>
                <TouchableOpacity onPress={handleNextPick}>
                    <Image
                        source={require('../../../../assets/ruleta.png')}
                        style={styles.ruletaIcon}
                    />
                </TouchableOpacity>
                <View style={styles.imageSelected}>
                    {turno > 0 && turno <= restantes.length && (
                        <Image
                            source={{ uri: restantes[turno - 1].imagen }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    )}
                </View>
            </View>

            <View style={styles.teamSection}>
                <View style={styles.teamInfo}>
                    <Image source={require('../../../../assets/usuario.png')} style={styles.imageTeam} />
                    <Text style={styles.teamTitle}>Equipo 2</Text>
                </View>
                <View style={styles.teams}>
                    {equipo2.map((personaje, idx) => (
                        <View key={idx} style={styles.imageContainer}>
                            <Image
                                source={{ uri: personaje.imagen }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Draft;