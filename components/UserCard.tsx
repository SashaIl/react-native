import { useUserCard } from '@/hooks/useUserCard';
import { UserType } from '@/types/UserType';
import { RefreshControl } from 'react-native';
import React, { Text, View } from 'react-native';

const UserCard = ({user} : {user: UserType | null}) => {

    if(!user){
        return(
            <Text>Loading...</Text>
        )
    }

    return (
        <View>
            <View>
                
                <Text>name: {user?.firstName} {user?.lastName}</Text>
                <Text>email: {user?.email}</Text>
                <Text>birthday: {user?.birthday?.toLocaleDateString()}</Text> 
            </View>
        </View>
    );
}

export default UserCard;
