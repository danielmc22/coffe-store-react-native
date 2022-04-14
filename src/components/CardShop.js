import React, { useEffect } from 'react'
import { Button, Image, View, ImageBackground, ScrollView, Text, TouchableOpacity, Feather, StyleSheet } from 'react-native';
import productActions from "../../redux/actions/productActions"
import { connect } from 'react-redux';
import { color } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';


function CardShop(props) {
    return (
        <View style={Styles.card}>

            <Image
                style={Styles.imageCard}
                source={{ uri: props.product.image }}
            />
            <View style={Styles.boxInfo}>
                <Text style={{ color: '#efeefe', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>{props.product.name}</Text>
                <Text style={{ color: '#efeefe', fontSize: 20, textAlign: 'center' }}>$ {props.product.price}</Text>
                <TouchableOpacity onPress={() => props.addToCart(props.product._id)}>
                    <View>
                        <AntDesign name="shoppingcart" size={30} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// export default CardShop


const mapDispatchToProps = {
    addToCart: productActions.addToCart,
}

export default connect(null, mapDispatchToProps)(CardShop)

const Styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 170,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageCard: {
        height: '90%',
        width: '38%'
    },
    boxInfo: {
        width: '56%',
        height: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 10,

        alignItems: 'center',
    }
})