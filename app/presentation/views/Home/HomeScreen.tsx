import {View, Text, ScrollView, Image} from "react-native";
import styles from "./StyleHome";
import {HomeRectangle} from "../../components/Home/HomeComponent";

const equipos = [
    {
        id: 1,
        nombre: "SnipeZ",
        victory: "2",
        defeats: "1",
        porcents: "50%",
        avatar: require('../../../../assets/usuario.png'),
        trophy: require('../../../../assets/trofeo_1.png'),
    },
    {
        id: 2,
        nombre: "Sayans",
        victory: "5",
        defeats: "2",
        porcents: "71%",
        avatar: require('../../../../assets/usuario.png'),
        trophy: require('../../../../assets/trofeo_1.png'),
    },
    {
        id: 3,
        nombre: "Mostoles",
        victory: "9",
        defeats: "20",
        porcents: "4%",
        avatar: require('../../../../assets/usuario.png'),
        trophy: require('../../../../assets/trofeo_1.png'),
    },
]


export function HomeScreen({navigation}: {navigation: any}) {
    return (
        <View style={styles.containercolor}>
            <Text style={styles.tittle}>Majestic CUP</Text>
            <ScrollView style={styles.containerScroll} horizontal={false}>
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
                {equipos.map((equipo) =>(
                    <View key={equipo.id} style={styles.card}>
                        <Image source={equipo.avatar} style={styles.avatar}/>
                        <View style={styles.info}>
                            <Text style={styles.teamName}>{equipo.nombre}</Text>
                            <Text style={styles.teamName}>{equipo.victory}/{equipo.defeats}</Text>
                            <Text style={styles.teamName}>{equipo.porcents}</Text>
                        </View>
                        <Image source={equipo.trophy} style={styles.trophy}/>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}