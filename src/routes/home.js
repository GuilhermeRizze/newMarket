import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Mercado from "../screens/mercado.js";
import Confirmacao from "../screens/confirmacaoCompra";
import Cadastro from "../screens/cadastro.js";
import Register from "../screens/register.js";

const Stack = createStackNavigator()

export default function Home(){
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Mercado" component={Mercado}/>
        <Stack.Screen name="FinalizacaoCompra" component={Confirmacao}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
}
