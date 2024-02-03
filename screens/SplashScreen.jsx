import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import CustomButton from '../components/common/CustomButton';

const SplashScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Splash Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Gameplay Screen">
            <Text>Splash Screen</Text>
            <CustomButton
                title="Sign In"
                onPress={() => navigation.navigate('SignIn')}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Start a new game"
            />
        </View>
    );
};

export default SplashScreen;
