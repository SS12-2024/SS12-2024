import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
    // Placeholder for user settings (for now)
    const [userSettings, setUserSettings] = useState({});

    // Load user settings from storage or backend
    const loadUserSettings = async () => {
        // Implement loading logic here
    };

    const value = {
        userSettings,
        setUserSettings,
        loadUserSettings,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};


/** 
 * @module GameContext
 * hook provides access to the game's global context.
 * @returns {object} The game context object containing state and functions.
 */