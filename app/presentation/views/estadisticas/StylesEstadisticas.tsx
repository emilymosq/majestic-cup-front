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
    containerTop:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    topTitles: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        width: '90%',
    },
    topText: {
        fontSize: 25,
        color: AppColors.color,
        fontWeight: 400,
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
    title: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        color: AppColors.color,
        fontWeight: 'bold',
    },
    containerEstadisticas:{
        marginTop: 35,
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});