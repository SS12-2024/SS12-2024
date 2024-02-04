import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { View, Button, Text, Dimensions, AccessibilityInfo } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "../entities";
import Physics from "../physics";
import { DirectionContext, DirectionProvider } from "../context/Accelerometer";
import Matter from "matter-js";
import useAudioPlayer from '../hooks/useAudioPlayer';
import backgroundAudio from '../assets/audio/bg-sound.wav'


// Game Object Components
import Wall from '../components/entities/Wall';
import { useGame } from '../context/GameContext';

const { height: screenHeight } = Dimensions.get('window');

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

// Move walls
const MoveWalls = (entities, { time }) => {
  let newEntities = { ...entities };
  Object.keys(newEntities).forEach(key => {
    if (newEntities[key].type === 'wall') {
      newEntities[key].position.y += 0.3 * time.delta;

      // Remove the wall if it moves off-screen
      if (newEntities[key].position.y > screenHeight) {
        delete newEntities[key];
      }
    }
  });
  return newEntities;
};


// Spawn walls
let lastSpawnTime = Date.now();
const SpawnWalls = (entities, { time }) => {
  let currentTime = Date.now();
  if (currentTime - lastSpawnTime > 50) { // Adjust spawn rate as needed
    const gapSize = 175;
    const wallHeight = screenHeight / 35;

    const randomNum = Math.floor(Math.random() * 200) - 75;

    const divisor = 3;
    let leftWidth = 0;
    if ((SpawnWalls.prevLeftWidth - randomNum) > 100) {
      leftWidth = SpawnWalls.prevLeftWidth - Math.abs(leftWidth - randomNum) / divisor;
    } else if (SpawnWalls.prevLeftWidth - randomNum < 100) {
      leftWidth = SpawnWalls.prevLeftWidth + Math.abs(leftWidth - randomNum) / divisor;
    }

    SpawnWalls.prevLeftWidth = leftWidth;
    const rightWidth = 1000;
    const leftWallX = 0;
    const rightWallX = leftWallX + leftWidth + gapSize;

    const wallIdBase = currentTime.toString();

    // Left wall entity
    entities[`leftWall_${wallIdBase}`] = {
      type: 'wall',
      position: { x: leftWallX, y: -wallHeight },
      size: { width: leftWidth, height: wallHeight },
      renderer: <Wall />
    };

    // Right wall entity
    entities[`rightWall_${wallIdBase}`] = {
      type: 'wall',
      position: { x: rightWallX, y: -wallHeight },
      size: { width: rightWidth, height: wallHeight },
      renderer: <Wall />
    };

    lastSpawnTime = currentTime;
  }
  return entities;
};

const GameScreen = () => {
  const { x } = useContext(DirectionContext);
  const {startGameTime,setStartGameTime,points,setPoints}  = useGame();
  const { playAudio, playKeepLoad } = useAudioPlayer(backgroundAudio);
  console.log(backgroundAudio);

  useEffect(() => {
    if (backgroundAudio) {
      playAudio();
    }
  });
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartGameTime(prevTimer => prevTimer + 1);
      console.log('Timer:',startGameTime);
       // Log the timer value
    }, 1000); // Update the timer every second
    
    setPoints(prevPoints => prevPoints+1);
    console.log('Point:',points);
    
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [startGameTime]);
  
  
  return (
    <View>
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
      <View style={styles.overlayContainer}>
        <Text style={styles.overlayText}>Score:{points}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlayText: {
    fontSize: 25,
    color:'white',
  },
  overlayContainer:{
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    alignItems:'center',
    paddingTop:30,
  }
});

export default GameScreen;
