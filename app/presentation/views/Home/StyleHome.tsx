import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";

const styles = StyleSheet.create({
    containercolor: {
        backgroundColor: AppColors.backgroundColor,
        flex: 1,
    },
    container: {
        marginTop: 30,
        padding: 20,
        borderRadius: 15,
        backgroundColor: AppColors.backgroundSecondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
        marginHorizontal: 20,
    },
    tittle : {
        marginTop: 50,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    subtittle : {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        marginVertical: 30,
        marginHorizontal: 40,
    },
    videoContainer: {
        marginTop: 10,
        marginBottom: 10,
        height: 200,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    containerScroll: {
        width: "100%",
        paddingBottom: 40
    },
    card: {
        marginVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: AppColors.primary,
        borderRadius: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        resizeMode: 'cover'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    teamName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        width: 70,
        overflow: 'hidden',
    },
    teamStats: {
        color: 'white',
        fontSize: 14,
        textAlign: 'right',
        width: 50,
    },
    trophy: {
        width: 45,
        height: 45,
        marginLeft: 20,
    },
    trophyPlaceholder: {
        width: 45,
        height: 45,
        marginLeft: 20,
    },
})

export default styles;