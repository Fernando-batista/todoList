import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function Load(){
    return (
        <View style={style.content} >
            <ActivityIndicator size={50} color={"lightblue"}/>
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1A1A1A",
    }
})