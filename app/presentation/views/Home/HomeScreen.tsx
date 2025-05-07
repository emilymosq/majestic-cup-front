import {useEffect} from "react";
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import styles from "./StyleHome";
import {HomeRectangle} from "../../components/Home/HomeComponent";
import {TeamViewModel} from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";

export function HomeScreen({navigation}: PropsStackNavigation) {
    const {teams, getTeams} = TeamViewModel();

    useEffect(() => {
        getTeams()
    }, []);

    return (
        <View style={styles.containercolor}>
            <ScrollView style={styles.containerScroll} horizontal={false}>
            <Text style={styles.tittle}>Majestic CUP</Text>
                <View style={styles.container}>
                    <View>
                        <HomeRectangle
                            videoUrl={'https://www.youtube.com/embed/7wcWVz-9p5Y'}/>
                    </View>
                    <View>
                        <HomeRectangle
                            videoUrl={'https://www.youtube.com/embed/G7cnAfp9-Bs'}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtittle}>Majestic CUP es una batalla digna de Noxus, donde el respeto se gana a la fuerza. Desde el 31 de febrero, equipos de hasta 6 jugadores tendrán que demostrar su fortaleza, ya sea con ingenio estratégico o pura habilidad implacable.</Text>
                </View>
                {teams
                    .sort((a, b) => {
                        // si tienen distintas victorias, el que tenga mas va primero.
                        if (b.victorias !== a.victorias) return b.victorias - a.victorias;
                        // si tienen la mismas victorias, se decide por quien tiene menos derrotas.
                        if (a.derrotas !== b.derrotas) return a.derrotas - b.derrotas;
                        // si las victorias y derrotas son iguales, se use el winrate
                        return b.winrate - a.winrate;
                    })
                    .map((team, index) =>(
                    <TouchableOpacity key={team.id} onPress={() => {
                        navigation.navigate('TeamMembers', { slug: team.slug})
                    }}>
                        <View style={styles.card}>
                            <Image source={
                                team.imagen
                                    ? { uri: `http://10.0.2.2:8000${team.imagen}` }
                                    : require('../../../../assets/usuario.png')
                            } style={styles.avatar}/>
                            <View style={styles.info}>
                                <Text style={styles.teamName}>{team.nombre}</Text>
                                <Text style={styles.teamStats}>{team.victorias}/{team.derrotas}</Text>
                                <Text style={styles.teamStats}>{team.winrate}%</Text>
                            </View>
                            {index < 3 ? (
                                <Image
                                    source={
                                        index === 0
                                            ? require('../../../../assets/trofeo_1.png')
                                            : index === 1
                                            ? require('../../../../assets/2_lugar.png')
                                            : require('../../../../assets/3er_lugar.png')
                                    }
                                    style={styles.trophy}
                                />
                            ) : (
                                <View style={styles.trophyPlaceholder} />
                            )}
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}