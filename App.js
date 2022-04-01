import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Page =styled.SafeAreaView`
  flex:1;
  flex-direction:row;
`;

const Quadrado1 = styled.View `
    flex:1;
    height:100px;
    background-color:black;
    padding:10px;
    margin-top: 45px;
`;

const Quadrado2 = styled.View `
    flex:1;
    height:150px;
    background-color:blue;
    padding:10px;
    margin-top: 145px;
`;

export default () => {
  return(
    <Page>
      <Quadrado1></Quadrado1>
      <Quadrado2></Quadrado2>
    </Page>
  );
}