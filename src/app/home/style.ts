import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        alignItems: "center",
        paddingTop: 40
    },
    imgHeader: {
        maxWidth: 160,
        maxHeight: 45
    },
    formTasks: {
        marginTop: 18,
        flexDirection: "row",
        gap: 10,
        padding: 16
    },
    inputTasks: {
        flex: 1,
        backgroundColor: "#262626",
        borderRadius: 6,
        padding: 10,
        borderWidth: 1,
    },
    btnSubmit: {
        width: 50,
        height: 50,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    titleBtn: {
        color: "#fff",
        width: 22,
        height: 22,
        borderColor: "white",
        borderWidth: 1,
        textAlign: "center",
        borderRadius: 50
    },
    listTasks: {
        marginTop: 15,
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15
    },
    infoTitle: {
        flexDirection: "row",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        justifyContent: "space-between"
    }
})