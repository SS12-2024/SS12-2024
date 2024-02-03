import React from 'react';
import { View, StyleSheet, AccessibilityInfo } from 'react-native';
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
                buttonStyle={styles.button}
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
