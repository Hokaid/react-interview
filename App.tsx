import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerBackVisible:false}}/>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerBackVisible:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}