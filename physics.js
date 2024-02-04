import Matter from "matter-js";

export default Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  Matter.Events.on(engine, "collisionStart", (event) => {
    // console.log("Collison");
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};
