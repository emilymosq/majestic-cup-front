import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "./StylesTeamMembers";
import { PropsStackNavigation } from "../../interfaces/StackNav";
import { TeamMembersViewModel } from "./ViewModel";
import { JugadorResponse } from '../../../domain/entities/Jugador';
import Member from "../../components/Member";

const TeamMembers = ({ navigation }: PropsStackNavigation) => {
    const { jugadores, errorMessage, teamName } = TeamMembersViewModel();

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity style={styles.backButton} onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.imageIcon} />
                </TouchableOpacity>
                <View style={styles.textWrapper}>
                    <Text style={styles.textTeam}>{teamName}</Text>
                </View>
            </View>
            <FlatList
                contentContainerStyle={styles.containerMember}
                data={jugadores}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: { item: JugadorResponse }) => (
                    <Member jugador={item} />
                )}
            />
        </View>
    );
};

export default TeamMembers;
