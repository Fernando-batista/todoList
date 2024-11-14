import { 
    View, 
    Text, 
    StatusBar, 
    Image, 
    TouchableOpacity,
    TextInput
 } from "react-native";
 import { useState } from "react";
import styles from "./style"

export default function HomeScreen(){
    const [ borderColor, setBordeColor ] = useState<string>("");

    function onFocusInput(){
        setBordeColor("#5E60CE")
    }
    function outFocusInput(){
        console.log("sai")
        setBordeColor("#262626")
    }


    return (
        <View style={styles.content} >
            <StatusBar  
            backgroundColor={"#1A1A1A"} 
            barStyle={"light-content"}
            />
            <Image style={styles.imgHeader} source={require("../../assets/images/Logo.png")} />

            <View style={styles.formTasks} >
                <TextInput 
                placeholder="Adicione uma nova tarefa" 
                placeholderTextColor="#808080"
                style={[ styles.inputTasks, { borderColor: borderColor }]}
                onFocus={ onFocusInput }
                onBlur={outFocusInput}
                />
                <TouchableOpacity style={styles.btnSubmit} >
                    <Text style={styles.titleBtn} >+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listTasks} >
                <View style={styles.infoTitle} >
                    <Text> Craiadas 0</Text>
                    <Text> Concluidas 0</Text>
                </View>

            </View>
        </View>
    )
}