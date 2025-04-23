import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MatchesComponente from "../components/MatchesComponente";
import {styles} from "./StylesMatches";

const Matches = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Partidas</Text>
            <View style={styles.containerMatches}>
                <MatchesComponente/>
            </View>
        </View>
    )
}

export default Matches;