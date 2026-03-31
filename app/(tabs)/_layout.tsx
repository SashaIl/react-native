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
            <Tabs.Screen name="profile" 
                options={
                    {
                        tabBarLabel: "Profile",
                        tabBarIcon: ({size, color}) =>
                            <FontAwesome5 name="user" size={size} color={color}/>
                    }
                }
            />
            <Tabs.Screen name="settings"
                options={
                    {
                        tabBarLabel: "Settings",
                        tabBarIcon: ({size, color}) =>
                            <FontAwesome5 name="cog" size={size} color={color}/>
                    }
                }
            />
        </Tabs>
    );
}

export default Layout;
