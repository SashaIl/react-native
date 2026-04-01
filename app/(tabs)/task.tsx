import TaskComponent from '@/components/TaskComponent';
import React from 'react';
import { Platform, View } from 'react-native';

const TaskScreen = () => {
    return (
        <>
            <View
                style={{
                    paddingHorizontal: 16,
                    paddingVertical: Platform.OS === "ios" ? 48 : 60,
                }}
            >
                <TaskComponent/>
            </View>
        </>
    );
}

export default TaskScreen;
