import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';
import productActions from "../../redux/actions/productActions";
/* import Stack from '../Navigation/Stack' */

const Detalle = (props) => {
    const { id } = props.route.params
    const [prod, setProd] = useState((props.allProducts.filter(prod => prod._id === id))[0])

    useEffect(() => {
        if (props.allProducts.length < 1) {
            props.getOneProduct(id)
                .then(response => setProd(response))
        }

    }, [id])
    
    return (
        <>
            <View style={styles.container}>
                <Button
                    onPress={() => props.addToCart(prod._id)} 
                    title="Add to Cart"
                />
                <Text style={styles.text}>{"Product Details"}</Text>
                <Image source={{ uri: prod.image }} style={styles.image} />
                <Text style={styles.name}>{prod.name}</Text>
                <Text style={styles.description}>{prod.description}</Text>

                <View style={styles.containerb}>
                    <Text style={styles.price}>{"Price: " + "$ " + prod.price}</Text>
                    <Text style={styles.stock}>{"Stock: " + "$ " + prod.stock}</Text>
                </View>

            </View>
        </>
    );
}


const mapDispachToProps = {
    getOneProduct: productActions.getOneProduct,
    addToCart: productActions.addToCart,
}
const mapStateToProps = (state) => {
    return {
        allProducts: state.productReducer.allProducts,
        cart: state.productReducer.cart
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Detalle);


const styles = StyleSheet.create({
    container: {
        /* position: "relative", */
        width: "100%",
        height: 900,
        marginBottom: 10,
        backgroundColor: "#242424"
    },
    containerb: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 25,
        marginBottom: 15,
        backgroundColor: "#242424"
    },
    image: {
        width: "30%",
        height: "30%",
        alignSelf: "center",
        margin: 10
    },
    name: {
        width: "80%",
        height: 30,
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontSize: 22,
        fontWeight: "900",
        marginBottom:-20,
    },

    text: {
        width: "100%",
        color: "white",
        fontSize: 20,
        lineHeight: 54,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#252525",
        top: "0%"
    },
    description: {
        width: "100%",
        color: "white",
        fontSize: 15,
        lineHeight: 24,
        fontWeight: "bold",
        textAlign: "center",
        /* backgroundColor: "#747474", */
        paddingLeft:10,
        paddingRight:10,
        top: "10%",
    },
    price: {
        width:"40%",
        textAlign:"center",
        color:"white",

    },
    stock: {
        width:"40%",
        textAlign:"center",
        color:"white",
    }
});