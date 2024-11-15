import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        flexDirection: "row",
        gap: 12
    },
    infoPanel: {
        fontFamily: "inter",
        fontSize: 16,
        fontWeight: "bold"
    },
    countPanel: {
        backgroundColor: "#333333",
        width: 27,
        height: 22,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    textCount: {
        fontFamily: "inter",
        fontSize: 12,
        color: "white",
        textAlign: "center"
    }
})