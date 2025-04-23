import {View, Text, ScrollView, Image} from "react-native";
import styles from "./StyleHome";
import {HomeRectangle} from "../../components/Home/HomeComponent";


export function HomeScreen({navigation}: {navigation: any}) {
    return (
        <View style={styles.containercolor}>
            <Text style={styles.tittle}>Majestic CUP</Text>
            <ScrollView style={styles.containerScroll} horizontal={false}>
                <View style={styles.container}>
                    <View>
                        <HomeRectangle
                            videoUrl={'https://www.youtube.com/embed/CqmFOV4QH88'}/>
                    </View>
                    <View>
                        <HomeRectangle
                            videoUrl={'https://www.youtube.com/embed/CqmFOV4QH88'}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtittle}>El First to Challenger es una batalla digna de Noxus, donde el respeto se gana a la fuerza. Desde el 9 de enero, equipos de hasta 6 jugadores tendrán que demostrar su fortaleza, ya sea con ingenio estratégico o pura habilidad implacable.</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../../../../assets/trofeo_1.png')} style={styles.avatar}/>
                    <View style={styles.info}>
                        <Text style={styles.teamName}>Equipo 1     0/0      0%</Text>
                    </View>
                    <Image source={require('../../../../assets/trofeo_1.png')} style={styles.trophy}/>
                </View>
            </ScrollView>
        </View>
    )
}