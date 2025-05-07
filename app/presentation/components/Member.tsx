import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";
import {TeamMembersViewModel} from "../views/team-members/ViewModel";

const Member = () => {
    const {jugadores, errorMessage} = TeamMembersViewModel();

    return (
        <View>
            {jugadores.map((j, index) => (
                <View key={index} style={styles.container}>
                    <View style={styles.userInfo}>
                        <Image source={require('../../../assets/usuario.png')} style={styles.imageUser} />
                        <Text style={styles.textUser}>{j.nombre}</Text>
                    </View>
                    <Text style={styles.textUser}>{j.nickname}</Text>
                    <Image source={require('../../../assets/comunicacion.png')} style={styles.imageIcon} />
                </View>
            ))}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: AppColors.backgroundSecondary,
        borderColor: AppColors.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textUser: {
        color: AppColors.color,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '500',
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    imageIcon: {
        width: 30,
        height: 30,
    },
});



export default Member;