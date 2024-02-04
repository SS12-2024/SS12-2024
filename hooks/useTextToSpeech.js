import { useEffect } from 'react';
import * as Speech from 'expo-speech';

const useTextToSpeech = (thingToSay) => {
  const speak = () => {
    Speech.speak(thingToSay);
  };

  // useEffect(() => {
  // speak();
  //return () => {
  //};
  //}, [thingToSay]);

  return speak;
};

export default useTextToSpeech;
