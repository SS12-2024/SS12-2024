import React from 'react';
import { TouchableOpacity, Text, StyleSheet, AccessibilityInfo, Dimensions } from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle, textStyle, accessibilityLabel }) => {
    const announceAccessibilityLabel = accessibilityLabel || title;

    const handlePress = () => {
        AccessibilityInfo.announceForAccessibility(announceAccessibilityLabel);
        onPress();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.button, buttonStyle]}
            accessibilityLabel={announceAccessibilityLabel}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
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
        flex:1,
        backgroundColor: '#1F1A38', // Dark purple
    },
    text: {
        fontSize: 25,
        color: 'white'
    },
});

export default CustomButton;

/** 
 * @module CustomButton
 * component that returns a customizable button.
 * @returns {component} Returns customized TouchableOpacity component with Text inside.
 */