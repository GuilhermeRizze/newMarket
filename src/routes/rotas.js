import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Carrinho from '../screens/cart.js';
import Home from './home.js';
import Login from "../screens/login.js"

const Tab = createBottomTabNavigator()

export default function Rotas(){
    return<NavigationContainer>
        <Tab.Navigator
        screenOptions={{tabBarActiveTintColor:'#FF8C00',
                        tabBarInactiveTintColor:'white',
                        tabBarLabelStyle:{
                            width:'100%',
                            flex:1,
                            fontWeight:'bold',
                            fontSize:16,
                            lineHeight:21,
                            paddingTop:21,
                            backgroundColor:'#8B0000'},
                        tabBarStyle:{
                            width:'100%',
                            height:60,
                            lineHeight:21},
                        tabBarIconStyle:{
                            display:'none',
                        }}}>
            <Tab.Screen name='Login' component={Login}/>
            <Tab.Screen name='Carrinho' component={Carrinho}/>
            
        </Tab.Navigator>
    </NavigationContainer>
}