import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const Layout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index" 
                options={
                    {
                        tabBarLabel: "Home",
                        tabBarIcon: ({size, color}) =>
                            <FontAwesome5 name="home" size={size} color={color}/>
                    }
                }
            />
        </Tabs>
    );
}

export default Layout;
