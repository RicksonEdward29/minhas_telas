import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign'

const Page =styled.SafeAreaView`
  flex:1
`;

const Superior =styled.View`
   width:500px;
   height:0px;
   margin-top: 41px;
   padding:65px;
   background-color:black;
`;

const Mercard = styled.Text`
    left:100px;
    top: 40px;
    color:black;
    font-size:35px;
`;

const On = styled.Text`
    left:220px;
    top: 10px;
    color:green;
    font-size:35px;
`;

const Line = styled.Text`
    left:268px;
    top: -40px;
    color:black;
    font-size:35px;
`;

const Corpo = styled.Text`
    color:black
    left:80px;
    top: -10px;
    color:black;
    font-size:15px;

`;  

export default () => {
  return(
    <Page>
     <Superior></Superior>
     <Mercard>Mercad</Mercard>
     <On>On</On>
     <Line>line</Line>
     <Corpo>Pedido Carrefour - Em andamento</Corpo>
     <Icon name="clockcircleo" size={25} color='#000'/>
    </Page>
  );
}