import {useNavigation} from "@react-navigation/native";
import {MatchesInterface} from "../../../domain/entities/Partidas";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import MatchesComponent from "../../components/MatchesComponent";

interface Props{
    item: MatchesInterface;
}

export const RenderPartida =  ({item}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();

    return (
        <MatchesComponent
            equipo1={item.equipo1.nombre}
            equipo2={item.equipo2.nombre}
            imagen1={{ uri: `http://10.0.2.2:8000${item.equipo1.imagen}` }}
            imagen2={{ uri: `http://10.0.2.2:8000${item.equipo2.imagen}` }}
            ganador= {item.ganador}
            fecha={item.fecha}
        />
    )
}