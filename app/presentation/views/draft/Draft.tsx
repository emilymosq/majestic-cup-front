import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from "./StylesDraft";
import {useDraftViewModel} from "./ViewModel";
import {PersonajeInterface} from "../../../domain/entities/Personaje";

const Draft = () => {
    const slug = 'HTvi8WnyU_RG4OjTCmY5mg';
    const { baneados, restantes, equipoElegido } = useDraftViewModel(slug);

    const [mostrarBaneados, setMostrarBaneados] = useState(false);
    const [turno, setTurno] = useState(0);
    const [equipo1, setEquipo1] = useState<PersonajeInterface[]>([]);
    const [equipo2, setEquipo2] = useState<PersonajeInterface[]>([]);
    const [personajeActual, setPersonajeActual] = useState<PersonajeInterface | null>(null);
    const [restantesDisponibles, setRestantesDisponibles] = useState<PersonajeInterface[]>([]);

    const handleClick = () => {
        if (!mostrarBaneados) {
            if (restantes.length === 0) return; // prevenir click antes de cargar
            setMostrarBaneados(true);
            setRestantesDisponibles([...restantes]);
            return;
        }

        if (turno >= 10 || restantesDisponibles.length === 0) return;

        const randomIndex = Math.floor(Math.random() * restantesDisponibles.length);
        const personaje = restantesDisponibles[randomIndex];
        const nuevosRestantes = restantesDisponibles.filter((_, idx) => idx !== randomIndex);

        console.log("Turno:", turno);
        console.log("Equipo 1:", equipo1);
        console.log("Equipo 2:", equipo2);


        if (turno % 2 === 0) {
            setEquipo1(prev => [...prev, personaje]);
        } else {
            setEquipo2(prev => [...prev, personaje]);
        }

        setPersonajeActual(personaje);
        setRestantesDisponibles(nuevosRestantes);
        setTurno(prev => prev + 1);
    };

    const nombreEquipo1 = equipoElegido?.nombre || 'Equipo 1';

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Draft</Text>
            <Text style={styles.subtitle}>Los 10 mandaos</Text>

            {mostrarBaneados && (
                <View style={styles.grid}>
                    {baneados.map((personaje, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Image source={{ uri: personaje.imagen }} style={styles.image} resizeMode="cover" />
                        </View>
                    ))}
                </View>
            )}

            <View style={styles.teamSection}>
                <View style={styles.teamInfo}>
                    {equipoElegido ? (
                        <>
                            <Image source={{ uri: equipoElegido.imagen }} style={styles.imageTeam} />
                            <Text style={styles.teamTitle}>{nombreEquipo1}</Text>
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
                            <Image source={{ uri: personaje.imagen }} style={styles.image} resizeMode="cover" />
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ruletaRow}>
                <TouchableOpacity onPress={handleClick} disabled={turno >= 10 && mostrarBaneados}>
                    <Image
                        source={require('../../../../assets/ruleta.png')}
                        style={[styles.ruletaIcon, turno >= 10 && mostrarBaneados && { opacity: 0.3 }]}
                    />
                </TouchableOpacity>
                <View style={styles.imageSelected}>
                    {personajeActual && (
                        <Image source={{ uri: personajeActual.imagen }} style={styles.image} resizeMode="cover" />
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
                            <Image source={{ uri: personaje.imagen }} style={styles.image} resizeMode="cover" />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Draft;