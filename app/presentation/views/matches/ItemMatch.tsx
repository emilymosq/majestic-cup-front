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
            equipo1={item.equipo1}
            equipo2={item.equipo2}
            // img={require("../../../../assets/juegos.png")}
            ganador={item.ganador}
            fecha={item.fecha}
        />

    )
}