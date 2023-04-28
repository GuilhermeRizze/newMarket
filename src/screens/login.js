import React from "react";
import { Text, TouchableOpacity, TextInput, Image } from "react-native";

import logo from "../../assets/logo.png"
import estilos from "../styles/estilos.js";

export default function Login({navigation}){
    return<>
        <Image source={logo} style={estilos.imagemAcougue2}/>
        <Text style={estilos.textoAcougueOsmar}>
            Açougue do Osmar
        </Text>
        <TextInput style={estilos.input} placeholder={"Digite o seu login"} placeholderTextColor={"#A9A9A9"}/>
        <TextInput style={estilos.input} placeholder={"Digite as sua senha"} placeholderTextColor={"#A9A9A9"}
        secureTextEntry={true} />
        <TouchableOpacity style={estilos.botaoComprar}
        onPress={()=>{
            navigation.navigate("Mercado")
        }}>
            <Text style={estilos.textoBotao}>
                Logar
            </Text>
        </TouchableOpacity>
        <Text style={estilos.textoCrieConta}>
            Crie sua conta agora mesmo
        </Text>
        <Text style={estilos.textoCadastrese} onPress={()=>{
            navigation.navigate('Cadastro')
        }}>
            Cadastre-se
        </Text>
    </>
}
