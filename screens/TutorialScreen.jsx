import React, { useEffect, useRef } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import CustomButton from '../components/common/CustomButton';
import { appStyles } from './styles/appStyles.js';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';


const TutorialScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    const speak = useTextToSpeech('Go To Main Menu');
    const speak2 = () => {
        const thingToSay = 'You are now on the Main Menu';
        Speech.speak(thingToSay);
    };
    const doubleTapRef = useRef(false);

    const handleButtonPress = () => {
        if (doubleTapRef.current) {
            // On the second tap, navigate to the SignIn screen
            navigation.navigate('Menu');
            speak2();

        } else {
            // On the first tap, speak the accessibility label
            speak();
            doubleTapRef.current = true;

            // Reset double tap after a short delay (adjust as needed)
            setTimeout(() => {
                doubleTapRef.current = false;
            }, 500);
        }
    };
    useEffect(() => {
        const screenChangeAnnouncement = "Tutorial Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true}  accessibilityLabel="Tutorial Screen" style={appStyles.container}>
            <CustomButton
                title="Go to Menu Screen"
                onPress={handleButtonPress}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Go to Menu"
            />
        </View>
    );
};

export default TutorialScreen;
