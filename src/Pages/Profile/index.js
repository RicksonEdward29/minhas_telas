import React from 'react';
import { SafeAreaView, Text, View, StyleSheet} from 'react-native';

export default function Profile() {
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Pagina Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});