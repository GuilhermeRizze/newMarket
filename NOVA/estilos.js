import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width

export default StyleSheet.create({
    cestaCarnes:{
        color:"#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight:"bold",
        textAlign:"center",
        color:"red",
    },
    topo:{
        width:"100%",
        height:578 / 768 * width
    },
    acougue:{
        flexDirection:"row",
        paddingVertical:12,
    },
    nomeAcougue:{
        fontSize:16,
        lineHeight:40,
        marginLeft:12,
        fontWeight:"bold",},
    imagemAcougue:{
        width:42,
        height:42,},
    descricao:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26,
        paddingHorizontal:12,
    },
    precoCesta:{
        color:"#8B0000",
        fontWeight:"bold",
        fontSize:32,
        lineHeight:42,
        marginTop:8,
        paddingHorizontal:12,
    },
    botaoComprar:{
        margin:16,
        marginTop:16,
        backgroundColor:"#B22222",
        paddingVertical:16,
        borderRadius:6,
    },
    textoBotao:{
        textAlign:"center",
        color:"#FFFFFF",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold",
        marginTop:5
    },
    textoCesta:{
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold",
    },
    itens:{
        fontSize:16,
        lineHeight:55,
        marginLeft:12,
        fontWeight:"bold",
        textAlign:"center",
    },
    imagemCarnes:{
        width:70,
        height:70,
    },
    blocoCarnes:{
        flexDirection:"row",
        paddingVertical:20,
        justifyContent:"space-between",
    },
    itensCarnes:{
        fontSize:17,
        lineHeight:55,
        marginLeft:12,
        fontWeight:"bold",
        textAlign:"center",
        color:"red",
        alignContent:"center"
    },
    botaoCarne:{
        margin:12,
        marginTop:4,
        backgroundColor:"#B22222",
        paddingVertical:6,
        paddingHorizontal:6,
        borderRadius:6
    },
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
    },
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        backgroundColor:"white",
        borderRadius:6,
    },
    imagemAcougue2:{
        paddingTop:8,
        width:250,
        height:250,
        alignSelf:"center",
    },
    textoAcougueOsmar:{
        fontSize:36,
        textAlign:"center",
        color:"#B22222",
        fontWeight:"bold",
        paddingBottom:8,
    },
    textoCrieConta:{
        textAlign:"center",
        fontSize:13,
        paddingBottom:10,
    },
    textoCadastrese:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold"
    }

})