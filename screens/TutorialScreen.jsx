import React, { useEffect, useRef } from 'react';
import { View, Text, AccessibilityInfo, TouchableOpacity } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import { buttonStyle } from './styles/buttonStyle.js';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';

const TutorialScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    const speak = useTextToSpeech('Long-press anywhere to go to menu');
    const speak2 = () => {
        const thingToSay = 'You are now on the main menu';
        Speech.speak(thingToSay);
    };
    
    const handleLongPress = () => {
        navigation.navigate('Menu');
        speak2();
    };

    useEffect(() => {
        const screenChangeAnnouncement = "Tutorial Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tutorial Screen"
            onPress={speak}
            onLongPress={handleLongPress}
            style={buttonStyle.container}
        >
            <View>
                <Text style={styles.button}>Main Menu</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TutorialScreen;
