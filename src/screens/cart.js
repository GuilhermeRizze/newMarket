import React from "react";
import { Image, StyleSheet, Dimensions, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import asado from "../../assets/produtos/asado_tira.png"
import toma from "../../assets/produtos/tomahawk.png"

export default function Carrinho({navigation}) {
    return <ScrollView>
        <Text style={styles.headText1}>
            Carrinho
        </Text>
        <Text style={styles.headText2}>
            Resumo das Compras
        </Text>
        <View style={styles.blocoCarnes}>
            <Image source={asado} style={styles.imagemCarnes} />
            <Text style={styles.itens}>
                Asado de Tira
            </Text>
            <Text style={styles.textoPreco}>
                {
                    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(100)
                }
            </Text>
            <TouchableOpacity style={styles.buttonCart}>
                <Text style={styles.textoBotao}>
                    Remover
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.blocoCarnes}>
            <Image source={toma} style={styles.imagemCarnes} />
            <Text style={styles.itens}>
                Toma Hawk
            </Text>
            <Text style={styles.textoPreco}>
                {
                    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(100)
                }
            </Text>
            <TouchableOpacity style={styles.buttonCart}>
                <Text style={styles.textoBotao}>
                    Remover
                </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.totalText}>
                Total

        </Text>
        <Text style={styles.totalprice}>
        {
                    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(200)
                }
        </Text>
        <TouchableOpacity style={styles.botaoComprar} onPress={()=>{
            navigation.navigate('FinalizacaoCompra')
        }}>
            <Text style={styles.textoBotao}>
                Finalizar Compra

            </Text>
            </TouchableOpacity>
    </ScrollView>
}
//styles
const styles = StyleSheet.create({

    headText1: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    headText2: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: "#B22222",
    },
    blocoCarnes: {
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-between",
        marginLeft:6
    },
    imagemCarnes: {
        width: 60,
        height: 60,
    },
    itens: {
        fontSize: 16,
        lineHeight: 55,
        marginLeft: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
    textoPreco: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 17,
        marginLeft: 20,
        color: "#FF0000",
        textAlign: "center",
    },
    buttonCart: {
        margin: 10,
        backgroundColor: "#B22222",
        paddingHorizontal: 16,
        borderRadius: 10,
        textAlign: "center",
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    totalText:{
        fontSize: 16,
        fontWeight:"bold",
        textAlign:"left",
        marginLeft: 10,
        marginTop: 20
    },
    totalprice:{
        fontSize:42,
        fontWeight:"bold",
        color: "#B22222",
        marginTop: 10,
        marginLeft: 10,
    },
    botaoComprar:{
        margin:16,
        marginTop:16,
        backgroundColor:"#B22222",
        paddingVertical:16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign:"center",
        color:"#FFFFFF",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold",
    }

})
