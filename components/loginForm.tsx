import React, { useRef, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { Image, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: "70%",
        width: "90%",      
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "gray",
        gap: 20,
        borderRadius: 12,
    },
    image: {
        width: "40%",
        height: "40%",
        resizeMode: 'contain'
    },
    input: {
        height: 48,
        borderRadius: 12,
        paddingHorizontal: 16,
        color: "#fff",
        backgroundColor: "rgba(65, 66, 68, 0.72)",
        // marginHorizontal: 20
        width: "60%"
    },
    button: {
        width: "40%",
        backgroundColor: "rgba(57, 72, 95, 0.72)",
        alignItems: "center",
        borderRadius: 10,
        padding: 10
    }
})

const LoginForm = () => {

    let login = useRef<string>("")
    let password = useRef<string>("")
    const [showRes, setShowRes] = useState<boolean>(false);

    
    return (
        <>
            <View style={styles.container}>
                <Image 
                    source={require("../assets/images/icon.png")}
                    style={styles.image}>
                        
                    </Image>
                <TextInput style={styles.input} placeholder='Login' onChange={event => login.current = event.nativeEvent.text}/>
                <TextInput style={styles.input} placeholder='Password' onChange={event => password.current = event.nativeEvent.text}/>
                <Pressable style={styles.button} onPress={_ => setShowRes((prev) => !prev)}>
                    <Text>press me</Text>    
                </Pressable>

                
                {showRes && login.current.length > 0 && password.current.length > 0 && 
                    <>
                        <Text>a: {login.current}</Text>
                        <Text>Password: {password.current}</Text>
                    </>
                }
            </View>
        </>
    );
}

export default LoginForm;
