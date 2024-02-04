import React, { useEffect } from 'react';
import { View, AccessibilityInfo, TouchableWithoutFeedback, Text } from 'react-native';
import { buttonStyle } from './styles/buttonStyle.js';
import { styles } from './styles/MenuStyles.js';
import useTextToSpeech from '../hooks/useTextToSpeech';


const LevelScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Leaderboard Screen. Select an option to continue.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);
    const speakEasy = useTextToSpeech('Long Press to play easy mode');
    const speakHard = useTextToSpeech('Long Press to play hard mode');
    const speakEasy2 = useTextToSpeech('Starting easy mode');
    const speakHard2 = useTextToSpeech('Starting hard mode');
    const handleLongPressEasy = () => {
        navigation.navigate('Gameplay');
        speakEasy2();
    };
    const handleLongPressHard = () => {
        navigation.navigate('Gameplay');
        speakHard2();
    };
    return (
        <View style={buttonStyle.levelContainer}>
            <TouchableWithoutFeedback
                accessible={true}
                accessibilityLabel="Start Game"
                onPress={speakEasy}
                onLongPress={handleLongPressEasy}
            >
                <Text style={styles.menuButton}>Easy</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                accessible={true}
                accessibilityLabel="Leaderboard"
                onPress={speakHard}
                onLongPress={handleLongPressHard}
            >
                <Text style={styles.menuButton}>Hard</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default LevelScreen;
