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
            <Icon style={styles.icon2} name="circledown" size={25} color='#000'></Icon>
            <Icon style={styles.icon2} name="circledown" size={25} color='#000'></Icon>
            <Icon style={styles.icon2} name="circledown" size={25} color='#000'></Icon>
            <Icon style={styles.icon3} name="ellipsis1" size={80} color='#000'></Icon>
            <Icon style={styles.icon4} name="ellipsis1" size={80} color='#000'></Icon>
          </View>
          <View>
              <Text style={{fontSize:15, position:'absolute', margin: -75 }}>Mercadorias sendo separadas</Text>
              <Text style={{fontSize:15, position:'absolute', margin: 25, left:-100, }}>Mercadorias em transporte</Text>
              <Text style={{fontSize:15, position:'absolute', margin: 120, right: -205, }}>Mercadorias a caminh</Text>
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
        
        alignItems:'center',
        backgroundColor:'white',
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
        
    },
    icon:{
        right:70,
        margin: 50,
        
    },
    icon2:{
        right:120,
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
        backgroundColor:'black',
        width:500,
        height:150,
        marginTop:-500,
    }
    
});

