import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.startButton} >
        <Text style={styles.buttonTextstart}>Start a new game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.leaderboardButton}>
        <Text style={styles.buttonTextleadership}>Leadership Board</Text>
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
    paddingHorizontal: 0,
  },
  startButton: {
    width: '50%', // Take up half of the screen
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    borderRadius: 0,
    marginRight: 8,
  },
  leaderboardButton: {
    width: '50%', // Take up half of the screen
    backgroundColor: 'white', // You can change the color as needed
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonTextstart: {
    color: 'white',
    fontSize:75,
    textAlign: 'center',
  },
  buttonTextleadership: {
    color: 'black',
    fontSize:75,
    textAlign: 'center',
  },
});
