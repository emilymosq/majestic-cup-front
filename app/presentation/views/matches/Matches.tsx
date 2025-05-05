import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MatchesComponent from "../../components/MatchesComponent";
import {styles} from "./StylesMatches";
import {MatchesViewModel} from "./ViewModel";
import {MatchesRepositoryImpl} from "../../../data/repositories/MatchesRepository";
import {MatchesInterface} from "../../../domain/entities/Partidas";
import {RenderPartida} from "./ItemMatch";

const Matches = () => {
    const {partidas, getPartidas} = MatchesViewModel();
    const matchesRepository = new MatchesRepositoryImpl();


    useEffect(() => {
       void getPartidas()
    }, []);


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Partidas</Text>
            <View style={styles.containerMatches}>
                <FlatList
                    data={partidas}
                    renderItem={({item}: {item: MatchesInterface}) => <RenderPartida item={item}/>}
                    keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={6}
                    windowSize={10}
                    ListFooterComponent={
                        <View style={{paddingVertical: 10}}>
                            <Text style={{textAlign: 'center'}}>No hay más partidas</Text>
                        </View>
                    }
                />
            </View>
        </View>
    )
}

export default Matches;