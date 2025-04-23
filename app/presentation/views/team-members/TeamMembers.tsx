import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Member from "../../components/Member";
import {styles} from "./StylesTeamMembers";

const TeamMembers = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity style={styles.backButton}>
                    <Image source={require('../../../../assets/atras.png')} style={styles.imageIcon} />
                </TouchableOpacity>
                <View style={styles.textWrapper}>
                    <Text style={styles.textTeam}>Equipo 1</Text>
                </View>
            </View>
            <View style={styles.containerMember}>
                <Member/>
            </View>
        </View>
    )
}

export default TeamMembers;