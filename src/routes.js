import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../src/Pages/Home';
import Search from '../src/Pages/Search';
import Profile from '../src/Pages/Profile';
import Notification from '../src/Pages/Notification';

import { Entypo, Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarItemstyle:{
                    backgroundColor: '#121212'
                },
                tabBarStyle:{
                    paddingBottom:5,
                    paddingTop:5,

                }
            }}
        >
            <Tab.Screen name="Inicio" component={Home}
                options={{
                    tabBarIcon:({ size, color}) => (
                        <Entypo name="home" size={size} color={color}/>
                 )
                }}
            />
            <Tab.Screen name="Procurar" component={Search}
                options={{
                    tabBarIcon:({ size, color}) => (
                        <Feather name="search" size={size} color={color}/>
                 )
                }}
            />
            <Tab.Screen name="Perfil" component={Profile}
            options={{
                tabBarIcon:({ size, color}) => (
                    <Feather name="user" size={size} color={color}/>
                 )
                }}
            />
            <Tab.Screen name="Notificacoes" component={Notification}
                options={{
                tabBarIcon:({ size, color}) => (
                    <Entypo name="notification" size={size} color={color}/>
                 )
                }}
            />
        </Tab.Navigator>
    )
}

