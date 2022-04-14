import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Picker, ScrollView, ImageBackground, Image } from 'react-native';
import productActions from "../../redux/actions/productActions"
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const categories = [{ name: "Coffees", }, { name: "Coffee maker", }, { name: "Accessories", }, { name: "Barista tools", }]




function CartShop(props) {

    let totalCompra = 0
    const [eventInput, setEventInput] = useState("");
    const [eventSelect, setEventSelect] = useState("");

    function contar() {
        let otraVariable = 0
        let suma = []
        suma.push(...props.cart.map(prod => prod.quantity * prod.price))
        suma.map((e) => otraVariable += e)
        return otraVariable
    }


    useEffect(() => {
        props.getAllProducts();
    }, []);

    return (

        <View style={{ backgroundColor: "black" }}>

            <View style={{
                minHeight: 100,
                display: 'flex',
                flexDirection: 'column',
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "#efeefe",
                marginTop: 15,
                marginBottom: 15,
                width: '80%',
                alignSelf: 'center'
            }}>

                <Text style={{ color: "white", fontSize: 30, width: "100%", textAlign: "center" }}>Total</Text>

                <Text style={{ color: "white", fontSize: 30, width: "100%", textAlign: "center" }}>$ {
                    props.cart ? (contar()) : (0)
                }</Text>

            </View>
            <ScrollView>
                <ImageBackground source={require('../../assets/fondo_alto.jpg')} style={{ width: "100%", minHeight: 1000, display: 'flex' }}>


                    <View style={styles.containerCards}>
                        <ScrollView style={styles.scrollViewShop}>
                            {props.cart.map((product) =>
                                <View key={product._id} style={styles.card}>
                                    {/* {console.log(product)} */}
                                    <Image
                                        style={styles.imageCard}
                                        source={{ uri: product.image }}
                                    />
                                    <View style={{ display: 'flex', height: 140, justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => props.addToCart(product._id)}>
                                            <View>
                                                <MaterialIcons name="add-shopping-cart" size={30} color="white" />
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => props.removeOneFromCart(product._id)}>
                                            <View>
                                                <MaterialCommunityIcons name="cart-minus" size={30} color="white" />
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => props.removeAllFromCart(product._id)}>
                                            <View>
                                                <MaterialCommunityIcons name="cart-remove" size={30} color="white" />
                                            </View>
                                        </TouchableOpacity>


                                    </View>

                                    <View style={styles.boxInfo}>
                                        <Text style={{ color: '#efeefe', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>{product.name}</Text>
                                        <Text style={{ color: '#efeefe', fontSize: 20, textAlign: 'center' }}>$ {product.price}</Text>
                                        <Text style={{ color: '#efeefe', fontSize: 20, textAlign: 'center' }}>X {product.quantity}u.</Text>
                                        <Text style={{ color: '#efeefe', fontSize: 20, textAlign: 'center' }}>Sub ${product.quantity * product.price}</Text>

                                    </View>
                                </View>

                            )}
                        </ScrollView>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.productReducer.allProducts,
        filtered: state.productReducer.filtered,
        cart: state.productReducer.cart
    }
}

const mapDispatchToProps = {
    filter: productActions.filter,
    addToCart: productActions.addToCart,
    removeOneFromCart: productActions.removeOneFromCart,
    removeAllFromCart: productActions.removeAllFromCart,
    emptyCart: productActions.emptyCart,
    getAllProducts: productActions.getAllProducts,

}

export default connect(mapStateToProps, mapDispatchToProps)(CartShop)

const styles = StyleSheet.create({

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
    },
    containerCards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})