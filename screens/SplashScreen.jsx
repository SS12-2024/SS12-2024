import React, { useEffect } from 'react';
import { View, AccessibilityInfo, TouchableWithoutFeedback, Text } from 'react-native';
import { buttonStyle } from './styles/buttonStyle.js';
import useTextToSpeech from '../hooks/useTextToSpeech';

const SplashScreen = ({ navigation }) => {
  const speak = useTextToSpeech('Welcome to Sound Dash!!!!    Tap anywhere to learn more, and long-tap to confirm.');
  const speak2 = useTextToSpeech('You are now on the sign-in page');

  const handleLongPress = () => {
    navigation.navigate('SignIn');
    speak2();
  };

  useEffect(() => {
    const screenChangeAnnouncement = 'Splash Screen.';
    AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
  }, []);

  return (
    <View accessible={true} accessibilityLabel="Gameplay Screen" style={buttonStyle.container}>
      <TouchableWithoutFeedback
        title="Sign In"
        onPress={speak}
        textStyle={{ color: 'white', fontSize: 50 }}
        accessibilityLabel="Start a new game"
        onLongPress={handleLongPress}
        style={buttonStyle.fullScreenButton} 
      >
        <Text style={buttonStyle.buttonText}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SplashScreen;
