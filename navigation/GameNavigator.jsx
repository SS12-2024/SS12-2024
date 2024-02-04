import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeaderboardScreen from '../screens/LeaderboardScreen'
import MenuScreen from '../screens/MenuScreen';
import GameScreen from '../screens/GameScreen';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import TutorialScreen from '../screens/TutorialScreen';
import LevelScreen from '../screens/LevelScreen';

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Tutorial" component={TutorialScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Level" component={LevelScreen} />
            <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
            <Stack.Screen name="Gameplay" component={GameScreen} />
            {/* Add more screens as needed */}
        </Stack.Navigator>
    );
};

export default GameNavigator;

/** 
 * @module GameNavigator
 * separates game navigation and is used to set menu options 
 */
