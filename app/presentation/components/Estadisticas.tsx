import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface Props{
    imagen: any,
    nombre: string,
    victorias: number,
    derrotas: number,
    winrate: number,
    trofeo: any
}

const EstadisticasComponent = ({imagen, nombre, victorias, derrotas, winrate, trofeo}:Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image source={imagen} style={styles.imageUser} />
                <Text style={styles.textUser}>{nombre}</Text>
            </View>
            <Text style={styles.textUser}>{victorias}/{derrotas}</Text>
            <Text style={styles.textUser}>{winrate}%</Text>
            <Image source={trofeo} style={styles.imageIcon} />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: AppColors.backgroundSecondary,
        borderColor: AppColors.primary,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
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