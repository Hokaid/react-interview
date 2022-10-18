import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';

export default function HomeScreen({navigation}) {
    const token = useSelector(state => state.AuthReducers.authToken);

    const dispatch = useDispatch();
    const SignOut = () => {
        dispatch(Logout())
    }

    return (
      <View>
        <View style={styles.topNavBar}>
            {token == null && <Pressable style={styles.topNavButton} onPress={() => navigation.navigate('Sign In')}>
                <Text style={styles.topNavText}>Sign In</Text>
            </Pressable>}
            {token != null && <Pressable style={styles.topNavButton} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.topNavText}>Dashboard</Text>
            </Pressable>}
            {token != null && <Pressable style={styles.topNavButton} onPress={() => SignOut()}>
                <Text style={styles.topNavText}>Sign Out</Text>
            </Pressable>}
        </View>
        <View style={styles.landing}>
            <Text style={styles.landingText}>Landing page</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    landing: { 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    landingText: {
        marginTop: 220
    },
    topNavBar: {
        height: 62,
        backgroundColor: 'grey',
        paddingTop: 6,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    topNavButton: {
        borderWidth: 1,
        width: 100,
        height: 48,
        borderColor: 'black',
        borderRadius: 8,
        paddingTop: 12,
        backgroundColor: 'white',
        marginHorizontal: 10
    },
    topNavText: {
        textAlign: 'center'
    }
});

export const SignOut = () => {
    return "You are logged out";
}