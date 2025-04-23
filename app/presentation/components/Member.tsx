import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";

const Member = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require('../../../assets/usuario.png')} style={styles.imageUser} />
                <Text style={styles.textUser}>Usuario</Text>
            </View>
            <Text style={styles.textUser}>username</Text>
            <Image source={require('../../../assets/comunicacion.png')} style={styles.imageIcon} />
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