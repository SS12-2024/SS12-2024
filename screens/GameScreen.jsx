import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { View, Button, Text, AccessibilityInfo } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "../entities";
import Physics from "../physics";
import { DirectionContext, DirectionProvider } from "../context/Accelerometer";
import Matter from "matter-js";
const HandleCarVelocity = (entities, { time, x }) => {
  if (x > 0.025) {
    Matter.Body.setVelocity(entities.Car.body, {
      x: 4,
      y: 0,
    });
  } else if (x < -0.025) {
    Matter.Body.setVelocity(entities.Car.body, {
      x: -4,
      y: 0,
    });
  } else {
    Matter.Body.setVelocity(entities.Car.body, {
      x: 0,
      y: 0,
    });
  }
  return entities;
};

const GameScreen = ({ navigation }) => {
  const { x } = useContext(DirectionContext);

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
        systems={[
          Physics,
          (entities, { time }) => HandleCarVelocity(entities, { time, x }),
        ]}
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
