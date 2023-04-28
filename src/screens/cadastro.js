import React from "react";
import {TouchableOpacity, TextInput , Text} from "react-native"

import estilos from "../styles/estilos";

export default function Cadastro({navigation}){
    return<>
        <TextInput style={estilos.input} placeholder={"Digite o seu login"} placeholderTextColor={"#A9A9A9"}/>
        <TextInput style={estilos.input} placeholder={"Digite as sua senha"} placeholderTextColor={"#A9A9A9"}
        secureTextEntry={true} />
        <TextInput style={estilos.input} placeholder={"Digite novamente a senha"} placeholderTextColor={"#A9A9A9"}
        secureTextEntry={true} />
        <TouchableOpacity style={estilos.botaoComprar} 
        onPress={()=>{
            navigation.navigate("Register")
        }}>
            <Text style={estilos.textoBotao}>
                Cadastrar
            </Text>
        </TouchableOpacity>
    </>
}