import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import CustomButton from '../components/common/CustomButton';

const SignInScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Gameplay Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true} accessibilityLabel="Gameplay Screen">
            <Text>Sign in Screen</Text>
            <CustomButton
                title="Go to Tutorial"
                onPress={() => navigation.navigate('Tutorial')}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Start tutorial"
            />
        </View>
    );
};

export default SignInScreen;
