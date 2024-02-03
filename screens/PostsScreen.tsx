import React from "react";
import { StyleSheet, Text, View, ScrollView, } from 'react-native';

import { StatusBar } from "expo-status-bar";

function PostsScreen(props: any) {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Great Game Name</Text>
            </View>
        </View>
    )
};

export default PostsScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D22030',
        justifyContent: 'space-around',
        padding: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 25
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    viewContainer: {
        padding: 10
    },
    statusBarStyles: {
        backgroundColor: 'red'
    }
  });