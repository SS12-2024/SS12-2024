import React, { useEffect } from 'react';
import { View, Button, Text, AccessibilityInfo } from 'react-native';
import { styles } from './styles/MenuStyles.js'
import CustomButton from '../components/common/CustomButton';
import { appStyles } from './styles/appStyles.js';


const TutorialScreen = ({ navigation }) => {
    // Announce screen changes for screen readers
    useEffect(() => {
        const screenChangeAnnouncement = "Tutorial Screen.";
        AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
    }, []);

    return (
        <View accessible={true}  accessibilityLabel="Tutorial Screen" style={appStyles.container}>
            <CustomButton
                title="Go to Menu Screen"
                onPress={() => navigation.navigate('Menu')}
                buttonStyle={styles.button}
                textStyle={{ color: 'white', fontSize: 50 }}
                accessibilityLabel="Go to Menu"
            />
        </View>
    );
};

export default TutorialScreen;
