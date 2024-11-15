import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        backgroundColor: "#262626",
        padding: 20,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#262626",
        marginBottom: 5
    },
    btnCompleteTask : {
        width: 20,
        height: 20,
        padding: 10,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    taskMessage: {
        color: "#F2F2F2",
        fontFamily: "inter",
        fontSize: 13,
        maxWidth: 250
    },
    btnremove :{
        padding: 5
    }
})