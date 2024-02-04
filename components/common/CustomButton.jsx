import React from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, AccessibilityInfo, Dimensions } from 'react-native';
import useTextToSpeech from '../../hooks/useTextToSpeech';

const CustomButton = ({ title, onPress, onLongPress, thingToSay, buttonStyle, textStyle, accessibilityLabel }) => {
    const announceAccessibilityLabel = accessibilityLabel || title;

    const handlePress = () => {
        AccessibilityInfo.announceForAccessibility(announceAccessibilityLabel);
        onPress();
    };

    const speak = useTextToSpeech(thingToSay);

    return (
        <TouchableWithoutFeedback onPress={handlePress} onLongPress={onLongPress}>
            <Text style={[styles.button, buttonStyle]} accessibilityLabel={announceAccessibilityLabel}>
                {title}
            </Text>
        </TouchableWithoutFeedback>
    );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight, // Adjust the height based on the number of buttons
        borderRadius: 4,
        elevation: 3,
        padding: 0,
        flex: 1,
        backgroundColor: '#1F1A38', // Dark purple
        fontSize: 25,
        color: 'white',
    },
});

export default CustomButton;
