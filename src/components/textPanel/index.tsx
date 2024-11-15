import { View, Text} from "react-native";
import styles from "./style"

interface Props {
    title: string,
    cout: number,
    color: string
}

export default function TextPanel(props: Props){
    return (
        <View style={styles.content} >
            <Text style={[styles.infoPanel, { color: props.color }]} >{props.title}</Text>
            <View style={styles.countPanel} >
                <Text style={styles.textCount} >{props.cout}</Text>
            </View>
        </View>
    )
}