import React, { useEffect, useRef } from 'react';
import { View, AccessibilityInfo, TouchableWithoutFeedback, Text } from 'react-native';
import useTextToSpeech from '../hooks/useTextToSpeech';
import { buttonStyle } from './styles/buttonStyle.js';
import { styles } from './styles/MenuStyles.js';
import * as Speech from 'expo-speech';

const MenuScreen = ({ navigation }) => {

    const handleLongPressStart = () => {
        navigation.navigate('Level');
        speakGame2();
    };

    const handleLongPressLeader = () => {
        Speech.stop();
        speakLeaderBoard2();
    };

    const handleLongPressResume = () => {
        navigation.navigate('GamePlay');
        speakResume2();
    };

    const speakGame = useTextToSpeech('Long Press to Start');
    const speakLeaderBoard = useTextToSpeech('Long Press to Announce Leader Board');
    const speakResume = useTextToSpeech('Long Press to Resume Saved Game');  
    const speakGame2 = useTextToSpeech('Choose A Level');
    const speakLeaderBoard2 = useTextToSpeech('First place: Tom, 56 points. Second place: Ben, 45 points. Third place: Emily, 40 points.');
    const speakResume2 = useTextToSpeech('Long Press to Resume Saved Game');

    useEffect(() => {
        Speech.stop();
        const screenChangeAnnouncement = 'Menu Screen. Select an option to continue.';
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View style={buttonStyle.container}>
            <TouchableWithoutFeedback
                accessible={true}
                accessibilityLabel="Start Game"
                onPress={speakGame}
                onLongPress={handleLongPressStart}
            >
                <Text style={styles.menuButton}>Start Game</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                accessible={true}
                accessibilityLabel="Leaderboard"
                onPress={speakLeaderBoard}
                onLongPress={handleLongPressLeader}
            >
                <Text style={styles.menuButton}>Leaderboard</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                accessible={true}
                accessibilityLabel="Resume Saved Game"
                onPress={speakResume}
                onLongPress={handleLongPressResume}
            >
                <Text style={styles.menuButton}>Resume Saved Game</Text>
            </TouchableWithoutFeedback>

        </View>
    );
};

export default MenuScreen;
