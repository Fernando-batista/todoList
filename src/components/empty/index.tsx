import { View, Text, Image } from "react-native";
import style from "./style";

export default function Empty(){
    return (
        <View style={style.content} >
            <Image source={require("../../assets/images/Clipboard.png")} />
            <Text style={style.messageEmpty} >Você ainda não tem tarefas cadastradas
            Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}