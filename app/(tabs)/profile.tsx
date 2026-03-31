import UserCard from "@/components/UserCard";
import { useUserCard } from "@/hooks/useUserCard";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native";
import { Pressable, View, Text, Platform, RefreshControl } from "react-native";


const ProfileScreen = () => {
    const navigation = useNavigation();

    const { userInfo, onRefresh, isRefreshing } = useUserCard();

    return (
        <>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                }
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
                    <Text>Wait 3 seconds</Text>
                </Pressable>

                <UserCard user={userInfo}/>
            </ScrollView>
        </>
    );
}

export default ProfileScreen;
