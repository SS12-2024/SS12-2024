import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, AccessibilityInfo } from 'react-native';
import CustomButton from '../components/common/CustomButton';
import useTextToSpeech from '../hooks/useTextToSpeech';
import * as Speech from 'expo-speech';

const MenuScreen = ({ navigation }) => {
    const speakGame = useTextToSpeech('Double Tap to Start Game');
    const speakLeaderBoard = useTextToSpeech('Double Tap to Announce Leader Board');
    const speakResume = useTextToSpeech('Double Tap to Resume Saved Game');

    const speakGame2 = () => {
        const thingToSay = 'Game Has Started';
        Speech.speak(thingToSay);
      };
    const doubleTapRef = useRef(false);
    const speakLeaderBoard2 = () => {
        const sayLeaderBoard = 'Announcing Leader Board';
        Speech.speak(sayLeaderBoard);
    };
    const speakResume2 = () => {
        const sayLeaderBoard = 'Resuming game';
        Speech.speak(sayLeaderBoard);
    };

    const handleButtonPressGame = () => {
        if (doubleTapRef.current) {
            navigation.navigate('Gameplay');
            speakGame2();
        } else {
            speakGame();
            doubleTapRef.current = true;
            setTimeout(() => {
                doubleTapRef.current = false;
            }, 500);
        }
    };

    const handleButtonPressLeaderBoard = () => {
        if (doubleTapRef.current) {
            navigation.navigate('Leaderboard');
            speakLeaderBoard2();
        } else {
            speakLeaderBoard();
            doubleTapRef.current = true;
            setTimeout(() => {
                doubleTapRef.current = false;
            }, 500);
        }
    };

    const handleButtonPressResume = () => {
        if (doubleTapRef.current) {
            navigation.navigate('Gameplay');
            speakResume2();
        } else {
            speakResume();
            doubleTapRef.current = true;
            setTimeout(() => {
                doubleTapRef.current = false;
            }, 500);
        }
    };

    // Announce screen changes for screen readers
    React.useEffect(() => {
        const screenChangeAnnouncement = "Menu Screen. Select an option to continue.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Main Menu" style={styles.container}>
            <CustomButton
                title="Start Game"
                onPress={handleButtonPressGame}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Start a new game"
            />
            <CustomButton
                title="Leaderboard"
                onPress={handleButtonPressLeaderBoard}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="View the leaderboard"
            />
            <CustomButton
                title="Resume Saved Game"
                onPress={handleButtonPressResume}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
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
        alignItems: 'stretch', // Align items to take up the entire width
        backgroundColor: '#1F1A38', // Dark purple
    },
    button: {
        flex: 1, // Each button takes equal space
        margin: 8, // Add some margin for better spacing
    },
});

export default MenuScreen;
