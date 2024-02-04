import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Custom Hooks for navigation and game context
import GameNavigator from "./navigation/GameNavigator";
import { GameProvider } from "./context/GameContext";
import { DirectionProvider } from "./context/Accelerometer";

const App = () => {
  return (
    <GameProvider>
      <DirectionProvider>
        <NavigationContainer>
          <GameNavigator />
        </NavigationContainer>
      </DirectionProvider>
    </GameProvider>
  );
};

export default App;
