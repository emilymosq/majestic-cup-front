import {Image, KeyboardType, TextInput, View, StyleSheet, Text} from "react-native";
import React from "react";
import {Surface} from "react-native-paper";


interface Props {
    placeholder: string;
    keyboardType: KeyboardType;
    secureTextEntry: boolean;
    text: string;
    image: any;
    editable: boolean;
    onPressFormInterface: (text: string) => void;

}

const FormInput = ({image,text, placeholder, keyboardType, secureTextEntry, editable, onPressFormInterface}: Props) => {

    return (
        <Surface style={styles.formInputContainer}>
            <Text style={styles.textInput}>{text}</Text>

            <TextInput style={styles.input}
                       placeholder={placeholder}
                       secureTextEntry={secureTextEntry}
                       keyboardType={keyboardType}
                       editable={editable}
                       onChangeText={onPressFormInterface}

            ></TextInput>
            <Image style={styles.formImageInput} source={image}/>
        </Surface>


    );
}

const styles = StyleSheet.create({
    formInputContainer:{
        flexDirection:"column",
        width:"100%",
        backgroundColor: "transparent",
    },


    textInput: {
        width:"100%",

        color:"white",
    },
    formImageInput: {
        width: 25,
        height: 25,
        position: "absolute",
        alignSelf: "flex-end",
        top:"45%",
        right:"5%",

    },
    input: {
        width: "100%",
        backgroundColor: "white",
        marginVertical:17,
        paddingHorizontal: 10,
        borderRadius: 80,
        borderColor: "#EAB308",
        borderWidth: 3,
        height: 50,
        elevation: 4,
    },
})
export default FormInput;