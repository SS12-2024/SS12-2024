import React from 'react';
import { View } from 'react-native';

const Player = ({ position, size }) => {
    return (
        <View style={{
            width: size.width,
            height: size.height,
            position: 'absolute',
            left: position.x,
            top: position.y,
            backgroundColor: 'red',
        }} />
    );
};

export default Player;
