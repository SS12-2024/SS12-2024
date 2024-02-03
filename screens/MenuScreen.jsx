import React from 'react';
import { View, Button, Text, AccessibilityInfo, findNodeHandle, StyleSheet } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import CustomButton from '../components/common/CustomButton';

const MenuScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    React.useEffect(() => {
        const screenChangeAnnouncement = "Menu Screen. Select an option to continue.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Main Menu" style={styles.container}>
            <CustomButton
                title="Start Game"
                onPress={() => navigation.navigate('Gameplay')}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Start a new game"
            />
            <CustomButton
                title="Leaderboard"
                onPress={() => navigation.navigate('Leaderboard')}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="View the leaderboard"
            />
            <CustomButton
                title="Resume Saved Game"
                onPress={() => navigation.navigate('Gameplay')}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Resume saved game"
            />
            {/* More menu items */}
        </View>
    );
};

export default MenuScreen;
