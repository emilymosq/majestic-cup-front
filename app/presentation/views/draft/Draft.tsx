import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Modal } from 'react-native';
import { styles } from "./StylesDraft";
import {LoginButton} from "../../components/LoginButton";

const Draft = () => {
    const dummyImg = require('../../../../assets/personaje.png');
    const prueba = require('../../../../assets/prueba.png');
    const squares = Array(10).fill(dummyImg);
    const equipo1 = Array(5).fill(prueba);
    const equipo2 = Array(5).fill(prueba);

    const [coinResult, setCoinResult] = useState<"Cara" | "Cruz" | null>(null);
    const [turnoEquipo, setTurnoEquipo] = useState<"Equipo 1" | "Equipo 2" | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const tossCoin = () => {
        const result = Math.random() < 0.5 ? 'Cara' : 'Cruz';
        setCoinResult(result);
        setTurnoEquipo(result === 'Cara' ? 'Equipo 1' : 'Equipo 2');
        setModalVisible(true);

        setTimeout(() => {
            setModalVisible(false);
            setCoinResult(null);
            setTurnoEquipo(null);
        }, 5000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Draft</Text>
            <Text style={styles.subtitle}>Los 10 mandaos</Text>

            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <LoginButton text="Tirar moneda" onPress={tossCoin} />
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={{ fontSize: 24, marginBottom: 10 }}>Resultado: {coinResult}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Empieza: {turnoEquipo}</Text>
                    </View>
                </View>
            </Modal>

            <View style={styles.grid}>
                {squares.map((img, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={img} style={styles.image} resizeMode="cover" />
                    </View>
                ))}
            </View>

            <View style={styles.teamSection}>
                <View style={styles.teamInfo}>
                    <Image source={require('../../../../assets/usuario.png')} style={styles.imageTeam} />
                    <Text style={styles.teamTitle}>Equipo 1</Text>
                </View>
                <View style={styles.teams}>
                    {equipo1.map((img, idx) => (
                        <View key={idx} style={styles.imageContainer}>
                            {img && <Image source={img} style={styles.image} resizeMode="cover" />}
                        </View>
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
                    {equipo2.map((img, idx) => (
                        <View key={idx} style={styles.imageContainer}>
                            {img && <Image source={img} style={styles.image} resizeMode="cover" />}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};


export default Draft;
