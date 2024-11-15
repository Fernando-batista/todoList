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
        paddingTop: 15,
        paddingLeft: 18,
        paddingRight: 18
    },
    inputTasks: {
        flex: 1,
        backgroundColor: "#262626",
        borderRadius: 6,
        padding: 10,
        borderWidth: 1,
        color: "#F2F2F2",
        fontFamily: "inter",
        maxHeight: 50
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
        maxWidth: 17,
        maxHeight: 17
    },
    listTasks: {
        marginTop: 30,
        width: "100%",
        paddingLeft: 18,
        paddingRight: 18,
    },
    FlatList: {
        marginTop: 20,
    },
    infoTasks: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})