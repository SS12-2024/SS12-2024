import React, { useEffect } from 'react';
import { View, Text, AccessibilityInfo, TouchableOpacity } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import { buttonStyle } from './styles/buttonStyle.js';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';

const SignInScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    const speak = useTextToSpeech('Long-press anywhere on the screen to start the tutorial');
    const speak2 = () => {
        const thingToSay = 'Tutorial has Started. Tilt your device to the left or right to move the player in that direction and navigate through the maze and avoid the walls. The music will intensify as you approach a wall.Tap once to pause the game ';
        Speech.speak(thingToSay);
    };
   
    const handleLongPress = () => {
        navigation.navigate('Tutorial');
        speak2();
    };

    useEffect(() => {
        const screenChangeAnnouncement = "Sign Screen";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <TouchableOpacity
            accessible={true}
            accessibilityLabel="Gameplay Screen"
            onPress={speak}
            onLongPress={handleLongPress}
            style={buttonStyle.container}
        >
            <View>
                <Text style={styles.button}>Tutorial</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SignInScreen;
