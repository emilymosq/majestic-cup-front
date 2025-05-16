import React from "react";
import {Image, Text, View, StyleSheet, Linking, TouchableOpacity} from "react-native";
import {AppColors} from "../theme/AppTheme";
import {TeamMembersViewModel} from "../views/team-members/ViewModel";
import {JugadorResponse} from "../../domain/entities/Jugador";

interface Props {
    jugador: JugadorResponse;
}

const Member = ({ jugador }: Props) => {
    const {jugadores, errorMessage} = TeamMembersViewModel();

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require('../../../assets/usuario.png')} style={styles.imageUser} />
                <Text style={styles.textUser}>{jugador.nombre}</Text>
            </View>
            <Text style={styles.textUser}>{jugador.nickname}</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {jugador.red_social?.map((red) => (
                    <TouchableOpacity key={red.red} onPress={() => Linking.openURL(red.link)}>
                        <Image
                            source={{ uri: `http://10.0.2.2:8000${red.red_icono}` }}
                            style={styles.imageIcon}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: AppColors.backgroundSecondary,
        borderColor: AppColors.primary,
        borderWidth: 1,
        borderRadius:15,
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