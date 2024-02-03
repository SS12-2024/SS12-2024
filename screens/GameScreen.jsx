import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Button, Text, AccessibilityInfo } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "../entities";
import Physics from "../physics";
const GameScreen = ({ navigation }) => {
  // Announce screen changes for screen readers
  useEffect(() => {
    const screenChangeAnnouncement = "Gameplay Screen.";
    AccessibilityInfo.announceForAccessibility(screenChangeAnnouncement);
  }, []);

  return (
    <View
      accessible={true}
      accessibilityLabel="Gameplay Screen"
      style={{ flex: 1 }}
    >
      <GameEngine
        systems={[Physics]}
        entities={entities()}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      ></GameEngine>

      <StatusBar style="auto" hidden={true} />
    </View>
  );
};

export default GameScreen;
