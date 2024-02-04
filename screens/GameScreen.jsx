import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet,View,Text } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

// Game Object Components
import Wall from '../components/entities/Wall';
import { useGame } from '../context/GameContext';




const { height: screenHeight } = Dimensions.get('window');

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
// const score=(startGameTime,setStartGameTime)=>{

//     return (setStartGameTime-startGameTime)
// }


const GameScreen = () => {
  const {startGameTime,setStartGameTime}  = useGame();
  
  useEffect(()=>{
   const starttime = Date.now();
   console.log(starttime);
  },[])
  
  return (
    <View>
      <GameEngine
        style={styles.container}
        systems={[MoveWalls, SpawnWalls]}
        entities={{
          // Initial entities 
        }}>
        {/* Other UI components can be added here */}
      </GameEngine>

      <View style={styles.overlayContainer}>
        <Text style={styles.overlayText}>Score: 100</Text>
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
    fontSize: 12,
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
