import Matter from "matter-js";

export default Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Car.body, {
        x: 0,
        y: -8,
      });
    });

  Matter.Events.on(engine, "collisionStart", (event) => {
    console.log("Collison");
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};
