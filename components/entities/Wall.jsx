import React from 'react';
import { View } from 'react-native';

const Wall = ({ position, size }) => {
    return (
        <View style={{
            width: size.width,
            height: size.height,
            position: 'absolute',
            left: position.x,
            top: position.y,
            backgroundColor: 'black',
        }} />
    );
};

export default Wall;
