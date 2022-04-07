import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export default function Home() {
    return(
        <SafeAreaView style={styles.container}>
        <View>
            <Image style={styles.Image} source={require('./Images/logo.png')}/>
            <Text style={styles.texto1}>Pedido Carrefour - Em andamento</Text>
        </View>
        <View>
            <Icon style={styles.icon} name="clockcircleo" size={25} color='#000'></Icon>
        </View>
        <View>
            <Text style={{left:10, marginTop:-80, fontSize:25,}}>00:35:50</Text>
        </View>
        <View>
            <Icon style={styles.icon2} name="circledown" size={25} color='#32CD32'></Icon>
            <Icon style={styles.icon2} name="circledown" size={25} color='#32CD32'></Icon>
            <Icon style={styles.icon2} name="circledown" size={25} color='#32CD32'></Icon>
            <Icon style={styles.icon3} name="ellipsis1" size={80} color='#00FF00'></Icon>
            <Icon style={styles.icon4} name="ellipsis1" size={80} color='#00FF00'></Icon>
        </View>
        <View>
            <Text style={{fontSize:15, position:'absolute', textAlign:'center', margin: -75, color:'#C0C0C0' }}>Mercadorias sendo separadas</Text>
            <Text style={{fontSize:15, position:'absolute', textAlign:'center', margin: 25, left:-100, color:'#C0C0C0' }}>Mercadorias em transporte</Text>
            <Text  style={{fontSize: 15, color:'black', textAlign:'center', position:'absolute', top: 120, right:-105, color:'#C0C0C0'}}>Mercadorias a caminho</Text>
        </View>
        <View>
            <View style={styles.sreenSup}></View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        backgroundColor:'white',
        marginTop: -150,
        

    },
    texto1:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: -25,
        textAlign:'center',
        
    },
    Image:{
        width:300,
        height:59,
        margin:80,
        top: 30,
        
    },
    icon:{
        right:70,
        margin: 50,
        
        
        
    },
    icon2:{
        right:150,
        margin:35,
    },
    icon3:{
        
        marginTop: -120,
        margin:-5,
        right:-30,
    },
    icon4:{
        
        marginTop: -200,
        margin:-15,
        right:-35,
    },
    sreenSup:{
        backgroundColor:'#363636',
        width:500,
        height:130,
        marginTop:-500,
    }
    
});

