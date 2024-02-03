import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

// Constant pitch value
const CONSTANT_PITCH = 1.2;

export default function App() {
  // Function to speak the given text with a constant pitch
  const speakWithConstantPitch = (text) => {
    Speech.speak(text, { language: 'en', pitch: CONSTANT_PITCH });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => speakWithConstantPitch('Start a new game')}>
        <Text style={styles.buttonText}>Start a new game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.leaderboardButton}
        onPress={() => speakWithConstantPitch('Leadership Board')}>
        <Text style={styles.buttonText}>Leadership Board</Text>
      </TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  startButton: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  leaderboardButton: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
