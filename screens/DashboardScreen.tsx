import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import envs from '../config/env';

export default function DashboardScreen({navigation}) {
    const [posts, setPosts] = useState<any[]>([]);
    const [comments, setComments] = useState<any[]>([]);
    const [page, setPage] = useState(1);

    //Function to fetch posts data
    const fetchPosts = () => {
        return fetch(envs.POSTS_API_URL)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }

    //Function to fetch comments data
    const fetchComments = () => {
        return fetch(envs.COMMENTS_API_URL)
            .then((response) => response.json())
            .then((data) => setComments(data));
    }
    
    useEffect(() => {
        fetchPosts();
        fetchComments();
    },[])

    //Function to get the amount of comments in a post
    const getCommentsCount = (postId: number) => {
        let postComments = comments.filter((comment) => comment.postId == postId);
        return postComments.length;
    }
    
    return (
      <View>
        <View style={styles.topNavBar}>
            <Pressable style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.homeText}>Home</Text>
            </Pressable>
        </View>
        {posts.length > 0 && <ScrollView>
           <View style={styles.postsList}>
            {posts.map((post, index) => {
                if (index >= (page-1)*10 && index < page*10)
                return (
                <View key={post.id} style={styles.itemCard}>
                    <Text style={styles.itemInfoText}><Text style={styles.itemLabelText}>Title:</Text> {post.title}</Text>
                    <Text style={styles.itemInfoText}><Text style={styles.itemLabelText}>Id:</Text> {post.id}</Text>
                    <Text style={styles.itemInfoText}><Text style={styles.itemLabelText}>User ID:</Text> {post.userId}</Text>
                    <Text style={styles.itemInfoText}><Text style={styles.itemLabelText}>Body:</Text> {post.body}</Text>
                    <Text style={styles.itemInfoText}><Text style={styles.itemLabelText}>Count of its comments:</Text> {getCommentsCount(post.id)}</Text>
                </View>
                );
            })}
            </View>
            <View style={styles.paginationContainer}>
                {page > 1 && <Pressable style={styles.pagesButton} onPress={() => setPage(page-1)}>
                    <Text style={styles.pagesText}>Go to previous page</Text>
                </Pressable>}
                {(posts.length - 10*page) > 0 && <Pressable style={styles.pagesButton} onPress={() => setPage(page+1)}>
                    <Text style={styles.pagesText}>Go to next page</Text>
                </Pressable>}
            </View>
        </ScrollView>}
      </View>
    );
}

const styles = StyleSheet.create({
    topNavBar: {
        height: 62,
        backgroundColor: 'grey',
        paddingTop: 6,
        paddingHorizontal: 16
    },
    homeButton: {
        borderWidth: 1,
        width: 100,
        height: 48,
        borderColor: 'black',
        borderRadius: 8,
        paddingTop: 12,
        backgroundColor: 'white'
    },
    homeText: {
        textAlign: 'center'
    },
    postsList: {
        marginHorizontal: 20,
        marginTop: 22,
    },
    itemCard: {
        borderRadius: 12,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 12,
        backgroundColor: 'white',
        marginBottom: 18
    },
    itemInfoText: {
        marginBottom: 10
    },
    itemLabelText: {
        fontWeight: 'bold'
    },
    paginationContainer: {
        marginHorizontal: 18,
        marginBottom: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagesButton: {
        borderWidth: 1,
        width: 200,
        height: 48,
        borderColor: 'black',
        borderRadius: 8,
        paddingTop: 12,
        backgroundColor: 'white',
        marginTop: 16
    },
    pagesText: {
        textAlign: 'center'
    }
});

export const getCommentsCount = (postId: number) => {
    return 5;
}