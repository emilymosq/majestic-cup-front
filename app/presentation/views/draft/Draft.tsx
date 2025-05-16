import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from "./StylesDraft";
import {useDraftViewModel} from "./ViewModel";
import {PersonajeInterface} from "../../../domain/entities/Personaje";
import { MotiView } from 'moti';


const Draft = () => {
    const slug = 'Jh6Aqr6TNj-hpU80cVpcYQ\n';
    const { baneados, restantes, equipoElegido,loading } = useDraftViewModel(slug);

    const [mostrarBaneados, setMostrarBaneados] = useState(false);
    const [turno, setTurno] = useState(0);
    const [equipo1, setEquipo1] = useState<PersonajeInterface[]>([]);
    const [equipo2, setEquipo2] = useState<PersonajeInterface[]>([]);
    const [personajeActual, setPersonajeActual] = useState<PersonajeInterface | null>(null);
    const [restantesDisponibles, setRestantesDisponibles] = useState<PersonajeInterface[]>([]);

    const handleClick = useCallback(() => {
        if(loading) return;
        console.log("Turno:", turno);
        console.log("Restantes disponibles:", restantesDisponibles);
        if (!mostrarBaneados) {
            if (restantes.length === 0) return; // prevenir click antes de cargar
            setMostrarBaneados(true);
            setRestantesDisponibles([...restantes]);
            return;
        }

        if (turno >= 10 || restantesDisponibles.length <= 0) return;

        const randomIndex = Math.floor(Math.random() * restantesDisponibles.length);
        const personaje = restantesDisponibles[randomIndex];
        console.log("Personaje elegido:", personaje);
        const nuevosRestantes = restantesDisponibles.filter(p => p.id !== personaje.id);
        console.log("Restantes después de la selección:", nuevosRestantes);



        if (turno % 2 === 0) {
            setEquipo1(prev => [...prev, personaje]);
        } else {
            setEquipo2(prev => [...prev, personaje]);
        }

        setPersonajeActual(personaje);
        setRestantesDisponibles(nuevosRestantes);
        setTurno(prev => prev + 1);

    }, [turno, mostrarBaneados, restantes, restantesDisponibles, loading]);
    console.log("Turno:", turno);
    console.log("Equipo 1:", equipo1);
    console.log("Equipo 2:", equipo2);

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
                        <MotiView
                            key={idx}
                            from={{ opacity: 0, scale: 1.4}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ type: 'spring', damping: 8, stiffness: 150 }}
                            style={styles.imageContainer}
                        >
                            <Image source={{ uri: personaje.imagen }} style={styles.image} resizeMode="cover" />
                        </MotiView>
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
                        <MotiView
                            key={idx}
                            from={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: 'spring', damping: 5,
                                stiffness: 150,
                                mass: 1 }}
                            style={styles.imageContainer}
                        >
                            <Image source={{ uri: personaje.imagen }} style={styles.image} resizeMode="cover" />
                        </MotiView>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Draft;