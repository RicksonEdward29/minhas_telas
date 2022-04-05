import React from 'react';
import { SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Notification() {
    return(
        <SafeAreaView style={StyleSheet.container}>
            <View style={StyleSheet.frontal}>
             <Text style={frente.texto}>CARREFOUR</Text>
             <Icon style={frente.icone01} name="arrowleft" size={35} color="green"></Icon>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    

});

const frente = StyleSheet.create({
    frontal:{
            flex: 1,
        width: 500,
        height: 100,
        backgroundColor: "black",
    },
    texto:{
        fontSize: 20,
        color:"black",
        left: 50,
        top: 16,
    },
    icone01:{
        marginTop: -15,
    }


})