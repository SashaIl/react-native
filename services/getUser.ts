import { UserType } from "@/types/UserType";

const USERS:UserType[] = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        birthday: new Date("1990-01-01")
    },
    {
        firstName: "Vitalik",
        lastName: "Kryvonis",
        email: "vitalik.kryvonis@example.com",
        birthday: new Date("2001-01-01")
    },

];

export const getUser = (): Promise<UserType> => {
    // try{
    //     const request = await fetch("https://jsonplaceholder.org/users/1", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     console.log(request);
        
    //     if(!request.ok){
    //         throw new Error("Failed to fetch user data");
    //     }

    //     const userData = await request.json();
    //     const user: UserType = {
    //         firstName: userData.firstname,
    //         lastName: userData.lastname,
    //         email: userData.email,
    //         birthday: new Date(userData.birthday)
    //     }
    //     return user;
    // } catch(error){
    //     throw new Error("Failed to fetch user data");
    // }

    let user: UserType = null as unknown as UserType;
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * USERS.length);
            user = USERS[randomIndex];
            resolve(user);
        }, 1000);
    })
}