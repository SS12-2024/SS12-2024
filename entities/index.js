import Matter from "matter-js";
import Car from "./Car";
import Floor from "./Floor";
import { Dimensions } from "react-native";
import WallBlock from "./WallBlock";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  engine.gravity.y = -0.00125;

  return {
    physics: { engine, world },
    Car: Car(
      world,
      "green",
      { x: windowWidth / 2, y: 300 },
      { height: 40, width: 40 }
    ),
  };
};
