import {TouchableOpacity} from "react-native";
import EstadisticasComponent from "../../components/Estadisticas";
import {TeamsInterface} from "../../../domain/entities/Teams";

interface Props{
    item: TeamsInterface;
    index: number;
    navigation: any;
}

export const RenderStats = ({item, index, navigation}:Props) => {
    let trofeo: any = null;

    if (index === 0) {
        trofeo = require('../../../../assets/trofeo_1.png');
    } else if (index === 1) {
        trofeo = require('../../../../assets/2_lugar.png');
    } else if (index === 2) {
        trofeo = require('../../../../assets/3er_lugar.png');
    }

    return (
        <TouchableOpacity   onPress={() => navigation.navigate('TeamMembers', { slug: item.slug })}>
            <EstadisticasComponent
                nombre={item.nombre}
                imagen={{ uri: `http://10.0.2.2:8000${item.imagen}` }}
                derrotas={item.derrotas}
                victorias={item.victorias}
                winrate={item.winrate}
                trofeo={trofeo}
            />
        </TouchableOpacity>
    )
}