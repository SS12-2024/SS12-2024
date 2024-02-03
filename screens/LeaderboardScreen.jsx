import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Leaderboard Screen. Select an option to continue.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Leaderboard Menu">
            <Text>Leaderboard</Text>
        </View>
    );
};

export default HomeScreen;
