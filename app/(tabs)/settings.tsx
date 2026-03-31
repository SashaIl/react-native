import { useNavigation } from 'expo-router';
import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { Text } from 'react-native';

const Settings = () => {
    const navigation = useNavigation();
    return (
        <>
            <View
                style={{

                        paddingHorizontal: 16,
                        paddingTop: Platform.OS === "android" ? 48 : 60,
                    }}
            >
                
                <Pressable onPress={navigation.goBack}
                    style={{
                        marginBottom: 16,
                    }}
                >
                    <Text>Go back</Text>
                </Pressable>

                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text>Settings</Text>
                </View>
            </View>
        </>
    );
}

export default Settings;
