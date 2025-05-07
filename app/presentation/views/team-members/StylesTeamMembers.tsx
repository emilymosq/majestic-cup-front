import React from 'react';
import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
        padding: 25,

    },
    containerTop:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    backButton: {
        position: 'absolute',
        left: 0,
        padding: 10,
    },
    imageIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        left: 0,
    },
    textWrapper: {
        alignItems: 'center',
    },
    textTeam: {
        fontSize: 22,
        color: AppColors.color,
        fontWeight: 'bold',
    },
    containerMember:{
        marginTop: 35,
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});