import { StyleSheet } from 'react-native';
import {AppColors} from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: AppColors.backgroundColor,
        padding: 20,
    },
    title: {
        fontSize: 22,
        color: AppColors.color,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30
    },
    subtitle: {
        color: '#ccc',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 14,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 60,
        height: 60,
        margin: 4,
    },
    imageSelected:{
        width: 90,
        height: 90,
        margin: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    teamSection: {
        marginVertical: 15,
    },
    teamInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    teamTitle: {
        color: '#ccc',
        fontSize: 16,
        marginLeft: 10
    },
    teams: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 6
    },
    imageTeam:{
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    ruletaRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        alignItems: 'center',
    },
    ruletaIcon: {
        width: 60,
        height: 60,
        tintColor: '#fff',
    },
    navBar: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        backgroundColor: '#222',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 10,
    },
});