import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {Surface} from "react-native-paper"

interface Props{
    onPress: () => void,
    text: string
}

export const LoginButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Surface style={styles.boton} elevation={5}>
                <Text style={styles.botontext}>{text}</Text>
            </Surface>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#EAB308",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,

    },
    botontext: {
      color: "grey",
      fontSize: 20,
    },
})