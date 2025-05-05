import React from 'react';
import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
        padding: 25
    },
    text: {
        fontSize: 22,
        color: AppColors.color,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    containerMatches:{
        marginTop: 35,
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});