import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Member from "../../components/Member";
import {styles} from "./StylesEstadisticas";
import EstadisticasComponent from "../../components/Estadisticas";

const Estadisticas = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Estadisticas</Text>
                </View>
                <View style={styles.topTitles}>
                    <Text style={styles.topText}>Teams</Text>
                    <Text style={styles.topText}>Win/Losses</Text>
                    <Text style={styles.topText}>WR</Text>
                </View>
            </View>
            <View style={styles.containerEstadisticas}>
                <EstadisticasComponent/>
            </View>
        </View>
    )
}

export default Estadisticas;