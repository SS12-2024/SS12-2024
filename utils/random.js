import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(300, windowHeight - 100);
  const pipetop = { pos: { x: windowHeight + addToPosX, y: yPosTop } };
};
