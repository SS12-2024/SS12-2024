import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
    // Placeholder for user settings (for now)
    const [userSettings, setUserSettings] = useState({});
    const [prevLeftWidth, setPrevLeftWidth] = useState(0);

    // Load user settings from storage or backend
    const loadUserSettings = async () => {
        // Implement loading logic here
    };

    const value = {
        userSettings,
        setUserSettings,
        loadUserSettings,
        prevLeftWidth,
        setPrevLeftWidth
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};


/** 
 * @module GameContext
 * hook provides access to the game's global context.
 * @returns {object} The game context object containing state and functions.
 */