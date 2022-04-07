import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'


import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Notification() {
    return(
        <SafeAreaView style={StyleSheet.container}>
            <View style={StyleSheet.sup}>
             <Text style={Superior.texto}>CARREFOUR</Text>
             <Icon style={Superior.icone} name="arrowleft" size={35} color="green"></Icon>
             <Text style={Superior.texto3}>Pagamento na entrega</Text>
             <Icon style={Superior.icone04} name="creditcard" size={20} color="green"></Icon>
             <Text style={Superior.texto4}>Cartão de Débito ou Crédito</Text>
             <Icon style={Superior.icone05} name="barcode" size={20} color="black"></Icon>
             <Text style={Superior.texto5}>Dinheiro</Text>
             <View style={Superior.linha1}></View>
             <Text style={Superior.texto6}>Pagamento pelo aplicativo</Text>
             <Text style={Superior.texto7}>Cartão de Débito ou Crédito</Text>
             <Icon style={Superior.icone07} name="creditcard" size={20} color="green"></Icon>
             <View style={Superior.linha2}></View>
             <Text style={Superior.texto8}>Endereço de entrega</Text>
             <Icon style={Superior.icone09} name="find" size={20} color="black"></Icon>
             <Text style={Superior.texto9}>R. Padre Anchieta, 226 - Mercês, Curitiba - PR, 80430-060</Text>
             <Text style={Superior.texto10}>Editar</Text>
             <View style={Superior.linha3}></View>
             <Text style={Superior.texto11}>Tempo de entrega:</Text>
             <Text style={Superior.texto12}>60 minutos</Text>
            </View>
            <View style={Superior.quadrado}></View>
            <TouchableOpacity style={botao.button} onPress={() => {}}>
             <View style={botao.container}>
              <Text style={botao.texto13}>Testando</Text>
             </View>
            </TouchableOpacity>
            <TouchableOpacity style={botao2.button2} onPress={() => {}}>
             <View style={botao.container2}>
              <Text style={botao.texto14}>Finalizar pedido</Text>
             </View>
            </TouchableOpacity>
             
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    

});

const Superior = StyleSheet.create({
    sup:{
        
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
    icone:{
        marginTop: -15,
    },
    
    texto3:{
        fontSize: 15,
        color:"black",
        left: 15,
        top: 30,
    },
    icone04:{
        top: 45,
        left: 15,
    },
    texto4:{
        fontSize: 20,
        color:"green",
        left: 55,
        top: 20,
    },
    icone05:{
        top: 45,
        left: 15,
    },
    texto5:{
        fontSize: 20,
        color:"green",
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
        fontSize: 15,
        color:"black",
        left: 15,
        top: 50,
    },
    icone07:{
        top: 40,
        left: 15,
    },
    texto7:{
        fontSize: 20,
        color:"green",
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
        fontSize: 15,
        color:"black",
        left: 15,
        top: 65,
    },
    icone09:{
        top: 70,
        left: 300,
    },
    texto9:{
        fontSize: 15,
        color:"green",
        left: 15,
        top: 95,
    },
    texto10:{
        fontSize: 20,
        top: 2,
        left: 330,
        color:'green',
    },
    linha3:{
        width: 500,
        height: 2,
        top: 95,
        backgroundColor:'grey',
    },
    texto11:{
        fontSize: 15,
        color:"black",
        left: 15,
        top: 110,
    },
    texto12:{
        fontSize: 15,
        color:"black",
        left: 15,
        top: 120,
    }



})

const botao = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop: 50,
    },
    button:{
        alignItems:'center',
        backgroundColor:'green',
        padding: 0,
        width: 180,
        top: -400,
        left: 210,
        borderRadius: 20,
        
        
    },
    texto13:{
        fontSize: 20,
        backgroundColor:'white',
    }
})

const botao2 = StyleSheet.create({
    container2:{
        flex:1,
        alignItems:'center',
        marginTop: 50,
    },
    button2:{
        alignItems:'center',
        backgroundColor:'green',
        padding: 15,
        width: 330,
        top: 120,
        left: 40,
        borderRadius: 15,
        
    },
    texto14:{
        fontSize: 25,
        backgroundColor:'white',
    }
})