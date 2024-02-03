import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Custom Hooks for navigation and game context
import GameNavigator from './navigation/GameNavigator';
import { GameProvider } from './context/GameContext';

const App = () => {
  return (
    <GameProvider>
      <NavigationContainer >
        <GameNavigator />
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;