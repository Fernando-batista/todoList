import { 
    View, 
    Text, 
    StatusBar, 
    Image, 
    TouchableOpacity,
    TextInput,
    FlatList
 } from "react-native";
 import { useState } from "react";
import styles from "./style";

import TextPanel from "../../components/textPanel";
import Empty from "../../components/empty";
import Tasks from "../../components/tasks";

export default function HomeScreen(){
    const [ borderColor, setBordeColor ] = useState<string>("");

    const [created, setcreated] = useState<number>(0);
    const [finished, setfinished] = useState<number>(0);

    const [task, setTask] = useState<string>("")
    const [listTask, setListTask] = useState<string[]>([])



    function handleAddTask(){
        setListTask(prevstate => [...prevstate, task])
        setTask("")
        setcreated(listTask.length + 1)
    }

    function handleRemoveTask(taskValue: string):void{
        const newList: string[] = listTask.filter( taskIndice => taskValue !== taskIndice );
        setListTask(prevstate => [...newList] );
        setcreated(prevsatate => prevsatate - 1);

        if(finished > 0){
            setfinished(prevstate => prevstate - 1)
        }
    }

    return (
        <View style={styles.content} >
            <Image style={styles.imgHeader} source={require("../../assets/images/Logo.png")} />

            <View style={styles.formTasks} >
                <TextInput
                    value={task}
                    onChangeText={setTask}
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor="#808080"
                    style={[ styles.inputTasks, { borderColor: borderColor }]}
                    onFocus={ ()=> setBordeColor("#5E60CE") }
                    onBlur={ ()=> setBordeColor("#262626")}
                />
                <TouchableOpacity 
                    style={styles.btnSubmit}
                    onPress={handleAddTask}
                    >
                    <Image 
                    style={styles.titleBtn}
                    source={require("../../assets/images/plus.png")} 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.listTasks} >
                <View style={styles.infoTasks} >
                  <TextPanel title="criadas" cout={created} color="#4EA8DE"/>
                  <TextPanel title="concluidas" cout={finished} color="#8284FA"/>
                </View>

                <FlatList 
                    style={styles.FlatList}
                    ListEmptyComponent={()=> <Empty /> }
                    data={listTask} 
                    renderItem={({item})=>(
                        <Tasks 
                            taskName={item} 
                            remove={()=> handleRemoveTask(item) } 
                            finished={()=> setfinished( prevestate => prevestate + 1 )} 
                            />
                    )} 
                    />
            </View>

            <StatusBar  
                backgroundColor={"#1A1A1A"} 
                barStyle={"light-content"}
            />
        </View>
    )
}