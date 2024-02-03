import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';

// Components
import Login from './screens/Login';
import Signup from './screens/Signup';
import PostsScreen from "./screens/PostsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.log('App is running!'); 
  }, []);
  return (
    <SafeAreaProvider>
        <NavigationContainer>
        <StatusBar />
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }}/>
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true }}/>
            <Stack.Screen name="PostsScreen" component={PostsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 65,
    backgroundColor: '#D22030',
  },
});
