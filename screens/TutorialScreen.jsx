import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';

const TutorialScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Tutorial Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Tutorial Screen">
            <Text>Here will be Tutorial</Text>
        </View>
    );
};

export default TutorialScreen;
