import Matter from "matter-js";
import React from "react";
import { View, Image } from "react-native";
import Bird from "../assets/Bird.png";
const Car = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const color = props.color;

  return (
    <View
      style={{
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        backgroundColor: "red",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f2f2f2",
        }}
        source={require("../assets/Bird1.png")}
      />
    </View>
  );
};

export default function (world, color, pos, size) {
  const initialCar = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Car" }
  );

  Matter.World.add(world, initialCar);

  return {
    body: initialCar,
    color,
    pos,
    renderer: <Car />,
  };
}
