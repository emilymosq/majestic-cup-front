import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {styles} from "./StylesEstadisticas";
import {TeamViewModel} from "../Home/ViewModel";
import {TeamsInterface} from "../../../domain/entities/Teams";
import {RenderStats} from "./RenderStats";
import {PropsStackNavigation} from "../../interfaces/StackNav";

const Estadisticas = ({navigation}: PropsStackNavigation) => {
    const {teams, getTeams} = TeamViewModel();

    const sortedTeams = teams
        .slice()
        .sort((a, b) => {
            if (b.victorias !== a.victorias) return b.victorias - a.victorias;
            if (a.derrotas !== b.derrotas) return a.derrotas - b.derrotas;
            return b.winrate - a.winrate;
        });


    useEffect(() => {
        getTeams();
    }, []);
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
                <FlatList
                    data={sortedTeams}
                    renderItem={({ item, index }: { item: TeamsInterface; index: number }) => (
                        <RenderStats item={item} index={index} navigation={navigation} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={10}
                    windowSize={10}
                    ListFooterComponent={
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>no hay más elementos</Text>
                        </View>
                    }
                    />
            </View>

        </View>
    )
}

export default Estadisticas;