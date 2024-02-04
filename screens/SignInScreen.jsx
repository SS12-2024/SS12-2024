import React, { useEffect, useRef } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import CustomButton from '../components/common/CustomButton';
import { appStyles } from './styles/appStyles.js';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';

const SignInScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    const speak = useTextToSpeech('Start Tutorial');
    const speak2 = () => {
        const thingToSay = 'Tutorial has Started';
        Speech.speak(thingToSay);
    };
    const doubleTapRef = useRef(false);

    const handleButtonPress = () => {
        if (doubleTapRef.current) {
            // On the second tap, navigate to the SignIn screen
            navigation.navigate('Tutorial');
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
        const screenChangeAnnouncement = "Sign Screen";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Gameplay Screen" style={appStyles.container}>
            <CustomButton
                title="Go to Tutorial"
                onPress={handleButtonPress}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Start tutorial"
            />
        </View>
    );
};

export default SignInScreen;
