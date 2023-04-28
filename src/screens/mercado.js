import React from 'react'
import {Text, StyleSheet, Dimensions,
    Image, View, TouchableOpacity,ScrollView} from 'react-native'

import estilos from '../styles/estilos'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'    
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import asadoTira from '../../assets/produtos/asado_tira.png'
import denver_steak from '../../assets/produtos/denver_steak.png'
import flat_iron from '../../assets/produtos/flat_iron.png'
import prime_rib from '../../assets/produtos/prime_rib.png'
import tomahawk from '../../assets/produtos/tomahawk.png'

const width = Dimensions.get('screen').width
export default function Mercado(){
    return( <ScrollView>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.cestaCarnes}>
        Cesta de Carnes
    </Text>
    <View style={estilos.acougue}>
        <Image source={logo} style={estilos.imagemAcougue}/>
        <Text style={estilos.nomeAcougue}>
            Açougue do Osmar
        </Text>
    </View>
    <Text style={estilos.descricao}>
        As melhores e mais selecionadas carnes, com produção própria,
        direto de nosso pasto para a mesa da sua casa!
    </Text>
    <Text style={estilos.precoCesta}>{
        Intl.NumberFormat('pt-BR',{
            style: 'currency', currency: 'BRL'
        }).format(278)
    }</Text>
    <TouchableOpacity style={estilos.botaoComprar}>
        <Text style={estilos.textoBotao}>
            Comprar
        </Text>
    </TouchableOpacity>
    <Text style={estilos.textoCesta}>
        Itens da Cesta de Compras
    </Text>
    <View style={estilos.blocoCarnes}>
        <Image source={asadoTira} style={estilos.imagemCarnes}/>
        <Text style={estilos.itens}>
            Asado de Tira
        </Text>
        <Text style={estilos.itensCarnes}>
            146,98
        </Text>
        <TouchableOpacity style={estilos.botaoCarne}>
            <Text style={estilos.textoBotao}>
                Adicionar
            </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.blocoCarnes}>
        <Image source={denver_steak} style={estilos.imagemCarnes}/>
        <Text style={estilos.itens}>
            Denver Steak
        </Text>
        <Text style={estilos.itensCarnes}>
            146,98
        </Text>
        <TouchableOpacity style={estilos.botaoCarne}>
            <Text style={estilos.textoBotao}>
                Adicionar
            </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.blocoCarnes}>
        <Image source={flat_iron} style={estilos.imagemCarnes}/>
        <Text style={estilos.itens}>
            Flat Iron
        </Text>
        <Text style={estilos.itensCarnes}>
            146,98
        </Text>
        <TouchableOpacity style={estilos.botaoCarne}>
            <Text style={estilos.textoBotao}>
                Adicionar
            </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.blocoCarnes}>
        <Image source={prime_rib} style={estilos.imagemCarnes}/>
        <Text style={estilos.itens}>
            Prime Rib
        </Text>
        <Text style={estilos.itensCarnes}>
            146,98
        </Text>
        <TouchableOpacity style={estilos.botaoCarne}>
            <Text style={estilos.textoBotao}>
                Adicionar
            </Text>
        </TouchableOpacity>
    </View>
    <View style={estilos.blocoCarnes}>
        <Image source={tomahawk} style={estilos.imagemCarnes}/>
        <Text style={estilos.itens}>
            Tomahawk
        </Text>
        <Text style={estilos.itensCarnes}>
            146,98
        </Text>
        <TouchableOpacity style={estilos.botaoCarne}>
            <Text style={estilos.textoBotao}>
                Adicionar
            </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
); }
