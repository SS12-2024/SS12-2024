import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';

const GameScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Gameplay Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Gameplay Screen">
            <Text>Here will be gameplay</Text>
        </View>
    );
};

export default GameScreen;
