import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        backgroundColor: "#262626",
        padding: 20,
        borderRadius: 13,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#262626"
    },
    btnCompleteTask : {
        width: 18,
        height: 18,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#4EA8DE",
        padding: 2
    },
    taskMessage: {
        color: "#F2F2F2",
        fontFamily: "inter",
        fontSize: 13,
        maxWidth: 250,
    }
})