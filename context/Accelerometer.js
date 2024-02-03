import React, { createContext, useContext, useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";
const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(500);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
    _slow();
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <DirectionContext.Provider value={{ x, y, z }}>
      {children}
    </DirectionContext.Provider>
  );
};
