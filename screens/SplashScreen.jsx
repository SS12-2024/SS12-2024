import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    // Fetch available voices on component mount
    async function fetchVoices() {
      const availableVoices = await Speech.getAvailableVoicesAsync();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]); // Set the default voice
    }

    fetchVoices();
  }, []);

  // Function to speak the given text with a specified voice
  const speakWithVoice = (text, voice) => {
    Speech.speak(text, { language: 'en', voice });
  };

  // Function to handle voice selection
  const handleVoiceChange = (voice) => {
    setSelectedVoice(voice);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => speakWithVoice('Start a new game', selectedVoice)}>
        <Text style={styles.buttonText}>Start a new game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.leaderboardButton}
        onPress={() => speakWithVoice('Leadership Board', selectedVoice)}>
        <Text style={styles.buttonText}>Leadership Board</Text>
      </TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>

      {/* Voice selection UI */}
      <View style={styles.voiceSelectionContainer}>
        <Text>Select Voice:</Text>
        {voices.map((voice) => (
          <TouchableOpacity
            key={voice.identifier}
            style={[
              styles.voiceButton,
              voice === selectedVoice && styles.selectedVoiceButton,
            ]}
            onPress={() => handleVoiceChange(voice)}>
            <Text>{voice.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 16,
  },
  startButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  leaderboardButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  voiceSelectionContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  voiceButton: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedVoiceButton: {
    backgroundColor: 'lightgray',
  },
});
