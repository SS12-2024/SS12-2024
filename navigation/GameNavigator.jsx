import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeaderboardScreen from '../screens/LeaderboardScreen'
import MenuScreen from '../screens/MenuScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={MenuScreen} />
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
