import { useState } from "react";
import { View, Text, Pressable, Image, Alert } from "react-native";
import style from "./style";

interface Props {
    taskName: string,
    remove: () => void,
    finished: () => void,
    cancel: ()=> void,
}

export default function Tasks(props: Props){
    const [ taskEnd, setTaskEnd ] = useState<boolean>(false)
    
    if(taskEnd){
        return (
            <View style={style.content} >
                <Pressable style={[ style.btnCompleteTask, { borderColor: "#262626", } ]} >
                    <Image source={require("../../assets/images/check.png")} />
                </Pressable>
                    <Text 
                        style={[style.taskMessage, { textDecorationLine: "line-through", color: "#808080" }]} >
                            {props.taskName}
                        </Text>
            <   Pressable 
                    onPress={props.remove}
                    style={style.btnremove}
                    >
                    <Image source={require("../../assets/images/del.png")} />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={style.content} >
            <Pressable  
                style={[style.btnCompleteTask, { borderColor: "#4EA8DE", }]}
                onPress={()=>{ 
                    setTaskEnd(true);
                    props.finished()
                }}
            >
            </Pressable>
            <Text style={style.taskMessage} >{ props.taskName }</Text>
            <Pressable 
                onPress={props.cancel}
                style={style.btnremove}
                >
                <Image source={require("../../assets/images/del.png")} />
            </Pressable>
        </View>
    )
}