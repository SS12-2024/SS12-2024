import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';

const LevelScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Leaderboard Screen. Select an option to continue.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="LevelScreen">
            <Text>Choose Easy or Hard</Text>
        </View>
    );
};

export default LevelScreen;
