import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";

const EstadisticasComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={require('../../../assets/usuario.png')} style={styles.imageUser} />
                <Text style={styles.textUser}>Equipo 1</Text>
            </View>
            <Text style={styles.textUser}>0/0</Text>
            <Text style={styles.textUser}>0%</Text>
            <Image source={require('../../../assets/trofeo_1.png')} style={styles.imageIcon} />
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
    titleInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textUser: {
        color: AppColors.color,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '500',
    },
    titleText: {
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



export default EstadisticasComponent;