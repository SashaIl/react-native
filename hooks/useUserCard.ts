import { getUser } from "@/services/getUser";
import { UserType } from "@/types/UserType";
import { useEffect, useState } from "react";

export const useUserCard = () => {
    
    const [userInfo, setUserInfo] = useState<UserType | null>(null);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

    useEffect(() => {
        fetchUserData();  
          
    }, []);

    const fetchUserData = async () => {
        const userData = await getUser();
        setUserInfo(userData);
    }
    

    const onRefresh = async () => {
        setIsRefreshing(true);
        await fetchUserData();
        setIsRefreshing(false);
    }

    return {
        userInfo,
        onRefresh,
        isRefreshing
    }
}