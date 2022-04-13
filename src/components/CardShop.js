import React,{useEffect} from 'react'
import { Button, Image, View, ImageBackground, ScrollView, Text, TouchableOpacity, Feather, StyleSheet } from 'react-native';
import productActions from "../../redux/actions/productActions"
import { connect } from 'react-redux';


function CardShop(props) {
    return(
        <View style={Styles.card}>
            
                <Image
                style={Styles.imageCard}
                source={{uri:props.product.image}}
                />
            <View style={Styles.boxInfo}>
                <Text>{props.product.name}</Text>
                <Text>{props.product.price}</Text>
                <View>
                    <Text>Icons cart</Text>
                </View>
            </View>
        </View>
    )
}

export default CardShop

const Styles = StyleSheet.create({
    card:{
        backgroundColor: 'green',
        width:'98%',
        height:'3%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems:'center'
    },
    imageCard:{
        backgroundColor:'black',
        height:'90%',
        width: '38%'
    },
    boxInfo:{
        backgroundColor:'pink',
        width: '56%',
        height:'90%',
        display:'flex',
        justifyContent: 'space-around',
        paddingLeft: 10
    }
})