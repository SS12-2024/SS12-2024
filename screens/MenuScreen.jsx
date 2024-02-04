import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, AccessibilityInfo } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';

const MenuScreen = ({ navigation }) => {
    const doubleTapRef = useRef(false);

    const speakAndNavigate = (text, screen, speakFunction, speakFunction2) => {
        if (doubleTapRef.current) {
            navigation.navigate(screen);
            Speech.speak(text);
        } else {
            speakFunction2();
            doubleTapRef.current = true;
            setTimeout(() => {
                doubleTapRef.current = false;
            }, 500);
        }
    };

    const speakGame = useTextToSpeech('game has started');
    const speakLeaderBoard = useTextToSpeech('Double Tap to Announce Leader Board');
    const speakResume = useTextToSpeech('Double Tap to Resume Saved Game');

    const speakGame2 = () => {
        const thingToSay = 'Double Tap to start game';
        Speech.speak(thingToSay);
    };

    const speakLeaderBoard2 = () => {
        const sayLeaderBoard = 'Double Tap to Announce Leader Board';
        Speech.speak(sayLeaderBoard);
    };

    const speakResume2 = () => {
        const sayLeaderBoard = 'Double Tap to resume game';
        Speech.speak(sayLeaderBoard);
    };

    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Menu Screen. Select an option to continue.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Main Menu" style={styles.container}>
            <CustomButton
                title="Start Game"
                onPress={() => speakAndNavigate('Game has started', 'Gameplay', speakGame, speakGame2)}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                accessibilityLabel="Start a new game"
            />
            <CustomButton
                title="Leaderboard"
                onPress={() => speakAndNavigate('Announcing Leader Board', 'Leaderboard', speakLeaderBoard, speakLeaderBoard2)}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                accessibilityLabel="View the leaderboard"
            />
            <CustomButton
                title="Resume Saved Game"
                onPress={() => speakAndNavigate('Resuming Saved Game', 'Gameplay', speakResume, speakResume2 )}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                accessibilityLabel="Resume saved game"
            />
            {/* More menu items */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#1F1A38',
    },
    button: {
        flex: 1,
        margin: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 50,
    },
});

export default MenuScreen;
