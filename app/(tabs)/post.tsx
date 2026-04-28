import { PostType } from "@/types/PostType";
import { useEffect, useState } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

const Post = () => {

    const [post, setPost] = useState<PostType | null>(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const request = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const data = await request.json();
                setPost(data);
            } catch(er){
                console.log(er);
            }

        }
        fetchData();
    }, []);

    return (
        <>
            <View
                style={styles.main_block}>
                <View style={styles.block}>
                    {post && (
                        <View>
                            <Text style={styles.title}>{post.title}</Text>
                            <Text style={styles.body}>{post.body}</Text>
                        </View>
                    )}
                </View>
            </View>
        </>

    );
}
const styles = StyleSheet.create({

    main_block: {
        paddingHorizontal: 16,
        paddingVertical: Platform.OS === "ios" ? 48 : 60,
        display: "flex",
        alignItems: "center",
    },

    block: {
        padding: 16,
        backgroundColor: "lightblue",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
        textTransform: "uppercase",
        borderWidth: 0.4,
        borderBottomColor: "black",
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
    },

    body: {
        fontSize: 14,
        lineHeight: 24,
    }
})


export default Post;
