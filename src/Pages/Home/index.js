import React from 'react';
import { SafeAreaView, Text, View, StyleSheet} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pagina Home</Text>
            <Color style={styles.color}></Color>

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
        fontWeight: 'bold',
        
        
    },
    color:{
        width:500,
        height:0,
    }
});

