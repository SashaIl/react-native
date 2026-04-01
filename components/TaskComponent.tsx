import { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskType } from "@/types/TaskType";
import { FlatList } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Touchable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, clear, deleteTask, setInitialTasks } from "@/store/slices/tasksSlice";
import { RootState } from "@/store/store";

const TaskComponent = () => {

    const [task, setTask] = useState<string>("");   

    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        loadTasks().then(tasks => {
                dispatch(setInitialTasks(tasks));
            });
        }, []);

    const loadTasks = async () => {
        const dataFromLs = await AsyncStorage.getItem("tasks") || "";
        const tasks: TaskType[] = dataFromLs==="" ? [] : JSON.parse(dataFromLs);
        return tasks;
    }

    const onPress = async () => {
        if(task.trim() === "") {
            alert("Task cannot be empty");
            return;
        }

        const tasks = await loadTasks();

        const newId = tasks.length > 0 ? tasks[tasks.length-1]?.id + 1 : 1;
        const newTask: TaskType = {
            id: newId,
            title: task,
        }

        const updatedTasks: TaskType[] = [...tasks, newTask];

        AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));

        dispatch(addTask(newTask));
        setTask("");
    }

    const clearTasks = async () => {
        await AsyncStorage.clear();
        dispatch(clear());
    }

    const deleteTaskById = async (id: number) => {
        const tasks = await loadTasks();
        if(!tasks.some(task => task.id === id)) {
            alert("Can not delete task");
            return;
        }
        const updatedTasks = tasks.filter(task => task.id !== id);
        AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
        dispatch(deleteTask(id));
    }

    return (
        <>
            <View
                style={{
                    marginTop: 16,
                    gap: 8,
                }}
            >

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            gap:8,
                            width: "50%",
                        }}
                    >
                        <Text>Enter new task</Text>
                        <TextInput 
                            style={{
                                padding: 8,
                                borderWidth: 1,
                                borderColor: "lightblue",
                                borderRadius: 8,
                            }}
                            placeholder="Buy milk"
                            value={task}
                            onChangeText={e => setTask(e)}
                        />
                        <TouchableOpacity
                            onPress={onPress}
                            style={{
                                paddingVertical: 4,
                                paddingHorizontal: 8,
                                backgroundColor: "lightblue",
                                borderRadius: 8,
                                alignItems: "center",
                            }}
                        >
                            <Text>Add Task</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            marginLeft: 16,
                        }}
                    >
                        <TouchableOpacity
                            onPress={clearTasks}
                            style={{
                                paddingVertical: 4,
                                paddingHorizontal: 8,
                                backgroundColor: "lightblue",
                                borderRadius: 8,
                            }}
                        >
                            <Text>Clear tasks</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View>
                <FlatList 
                    style={{
                        marginTop: 16,
                    }}
                    data={selector.tasks}
                    renderItem={({item}) => (
                        <View
                            style={{
                                marginTop: 8,
                                padding: 8,
                                backgroundColor: "lightblue",
                                borderRadius: 8,
                                flexDirection: "row",
                                gap: 8,
                                justifyContent: "space-between",
                            }}
                        >
                            <Text>{item.id}: {item.title}</Text>
                            <Pressable
                                style={{
                                    paddingVertical: 4,
                                    paddingHorizontal: 8,
                                    backgroundColor: "#3366ff",
                                    borderRadius: 8,
                                }}
                                onPress={() => deleteTaskById(item.id)}>
                                <Text>Delete</Text>
                            </Pressable>
                        </View>
                )}
                />
            </View>
        </>
    );
}

export default TaskComponent;
