import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containercolor: {
        backgroundColor: 'black',
        flex: 1,
    },
    container: {
        marginTop: 30,
        padding: 20,
        borderRadius: 15,
      backgroundColor: '#1A1A1C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
        marginHorizontal: 10,
    },
    tittle : {
        marginTop: 50,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    subtittle : {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        marginTop: 30,
        marginHorizontal: 40,
    },
    videoContainer: {
        marginTop: 20,
        marginBottom: 20,
        height: 200,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    containerScroll: {
        width: "100%",
    },
    card: {
        marginTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: 'gold',
        borderRadius: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
    },
    teamName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        flex: 1,
    },
    trophy: {
        width: 60,
        height: 60,
    }
})

export default styles;