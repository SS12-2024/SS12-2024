import Matter from "matter-js";
import Car from "./Car";

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  engine.gravity.y = 0.7;

  return {
    physics: { engine, world },
    Car: Car(world, "green", { x: 50, y: 300 }, { height: 40, width: 40 }),
  };
};
