import React from 'react';
import { TouchableOpacity, Text, StyleSheet, AccessibilityInfo } from 'react-native';

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

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1F1A38', // Dark purple
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
});

export default CustomButton;

/** 
 * @module CustomButton
 * component that returns a customizable button.
 * @returns {component} Returns customized TouchableOpacity component with Text inside.
 */