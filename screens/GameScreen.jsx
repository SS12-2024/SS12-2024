import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import useAudioPlayer from '../hooks/useAudioPlayer';
import backgroundAudio from '../assets/audio/bg-sound.wav'

// Game Object Components
import Wall from '../components/entities/Wall';
import Player from '../components/entities/Player'


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

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

let lastPlayerSpawnTime = Date.now();
const SpawnPlayer = (entities, { time }) => {
  let currentTime = Date.now();
  if (currentTime - lastPlayerSpawnTime > 1) {
    const playerPos = screenWidth / 2;
    const wallIdBase = "696969";

    // Adding player to list of entities
    entities[`player_${wallIdBase}`] = {
      type: 'wall',
      position: { x: playerPos, y: screenHeight / 1.4 },
      size: { width: 50, height: 50 },
      renderer: <Player />
    };

    lastPlayerSpawnTime = currentTime;
  }
  return entities;
};


const GameScreen = () => {


  return (
    <GameEngine
      style={styles.container}
      systems={[MoveWalls, SpawnWalls, SpawnPlayer]}
      entities={{
        // Initial entities 
      }}>
      {/* Other UI components can be added here */}
    </GameEngine>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default GameScreen;
