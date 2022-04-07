import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity,  } from 'react-native';
import Icon from   'react-native-vector-icons/Feather'


export default function Notification() {
    return(
        <SafeAreaView style={StyleSheet.container}>
        <View style={styles.espacoSup}>
            <Text style={styles.texto}>CARREFOUR</Text>
            <Icon style={styles.icone} name="arrow-left-circle" size={30} color="#32CD32"></Icon>
            <Icon style={styles.icone1} name="shopping-cart" size={25} color="#F0FFF0"></Icon>
            <TouchableOpacity style={styles.button1} onPress={() => {}}>
                    <Text style={{fontSize: 20, color: 'white',}}>12 | R$ 209,84</Text>
            </TouchableOpacity>
        <View style={StyleSheet.sup}>
            <Text style={Superior.texto3}>Pagamento na entrega</Text>
            <Icon style={Superior.icone04} name="credit-card" size={20} color="green"></Icon>
            <Text style={Superior.texto4}>Cartão de Débito ou Crédito</Text>
            <Icon style={Superior.icone05} name="dollar-sign" size={20} color="black"></Icon>
            <Text style={Superior.texto5}>Dinheiro</Text>
            <View style={Superior.linha1}></View>
            <Text style={Superior.texto6}>Pagamento pelo aplicativo</Text>
            <Text style={Superior.texto7}>Cartão de Débito ou Crédito</Text>
            <Icon style={Superior.icone07} name="credit-card" size={20} color="green"></Icon>
            <View style={Superior.linha2}></View>
            <Text style={Superior.texto8}>Endereço de entrega:</Text>
            <Icon style={Superior.icone09} name="map-pin" size={20} color="black"></Icon>
            <Text adjustsFontSizeToFit={true} style={Superior.texto9}>
            R. Padre Anchieta, 226 - Mercês, Curitiba - PR, 80430-060
            </Text>
            <Text style={Superior.texto10}>Editar</Text>
            <View style={Superior.linha3}></View>
            <Text style={Superior.texto11}>Tempo de entrega:</Text>
            <Text style={Superior.texto12}>60 minutos</Text>
            <TouchableOpacity style={Superior.button2} onPress={() => {}}>
                    <Text style={{fontSize: 25, color: 'white', top: 10,}}>Finalizar pedido</Text>
            </TouchableOpacity>
        </View>
            <View style={Superior.quadrado}></View>
            </View>  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    espacoSup:{
        width: 500,
        height: 100,
        backgroundColor: '#363636',
    },
    texto:{
        fontSize: 20,
        color:"white",
        left: 140,
        top: 10,
    },
    icone:{
        top: -20,
        left: 10,
    },
    button1:{
        alignItems:'center',
        backgroundColor:'#32CD32',
        paddingBottom: 0,
        width: 180,
        top: -25,
        left: 45,
        borderRadius: 20,
    },
    textoButton:{
        
        backgroundColor:'white',
    },
    icone1:{
        left: 10,
        top: 0,
    }
    
    

});

const Superior = StyleSheet.create({
    sup:{
        
        width: 500,
        height: 100,
        backgroundColor: "black",
    },
    
    texto3:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 10,
    },
    icone04:{
        top: 45,
        left: 15,
    },
    texto4:{
        fontSize: 20,
        color:"#32CD32",
        left: 55,
        top: 20,
    },
    icone05:{
        top: 45,
        left: 15,
    },
    texto5:{
        fontSize: 20,
        color:"#32CD32",
        left: 55,
        top: 20,
        
    },
    linha1:{
        width: 500,
        height: 2,
        top: 35,
        backgroundColor:'grey',
    },
    texto6:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 50,
    },
    icone07:{
        top: 40,
        left: 15,
    },
    texto7:{
        fontSize: 20,
        color:"#32CD32",
        left: 55,
        top: 65,
    },
    linha2:{
        width: 500,
        height: 2,
        top: 65,
        backgroundColor:'grey',
    },
    texto8:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 75,
    },
    icone09:{
        top: 50,
        left: 300,
        
    },
    texto9:{
        fontSize: 15,
        color:"#32CD32",
        left: 15,
        top: 70,
        
        
        
    },
    texto10:{
        fontSize: 20,
        top: 2,
        left: 330,
        color:'#32CD32',
    },
    linha3:{
        width: 500,
        height: 2,
        top: 95,
        backgroundColor:'grey',
    },
    texto11:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 15,
        top: 110,
    },
    texto12:{
        fontSize: 20,
        color:"#C0C0C0",
        left: 210,
        top: 82,
    },
    button2:{
        alignItems:'center',
        backgroundColor:'#32CD32',
        paddingBottom: 20,
        width: 300,
        top: 110,
        left: 50,
        borderRadius: 15,
    }
    


})


