import React from "react";
import {View, Text, StyleSheet} from 'react-native'

function AccountScreen(props: any) {

    return (
        <View style= {styles.container}>
        <Text style= {styles.accountname} >
        </Text>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
        ,
    },
    accountname:{
        fontSize: 45,
        color: 'red',
        fontFamily: 'Times New Roman'
    },

});

export default AccountScreen;