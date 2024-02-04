import React, { useEffect, useRef } from 'react';
import { View, AccessibilityInfo } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import { appStyles } from './styles/appStyles.js';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';

const SplashScreen = ({ navigation }) => {
    const speak = useTextToSpeech('Sign In');
    const speak2 = () => {
        const thingToSay = 'You are now on the Tutorial Page';
        Speech.speak(thingToSay);
      };
    const doubleTapRef = useRef(false);

    const handleButtonPress = () => {
        if (doubleTapRef.current) {
            // On the second tap, navigate to the SignIn screen
            navigation.navigate('SignIn');
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
        const screenChangeAnnouncement = "Splash Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Gameplay Screen" style={appStyles.container}>
            <CustomButton
                title="Sign In"
                onPress={handleButtonPress}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Start a new game"
            />
        </View>
    );
};

export default SplashScreen;
