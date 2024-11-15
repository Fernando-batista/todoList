import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 35,
        gap: 15,
        borderTopWidth: 1,
        borderTopColor: "#333333"
    },
    messageEmpty: {
        color: "#808080",
        fontSize: 14,
        fontWeight: "bold",
        maxWidth: 280,
        textAlign: "center"
    }
})