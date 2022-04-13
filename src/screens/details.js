import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import productActions from "../redux/actions/productActions";
/* import Stack from '../Navigation/Stack' */

const Detalle = (props) => {
    const { id } = useParams()
    const [prod, setProd] = useState(props.allProducts.filter(prod => prod._id === id)[0])

    useEffect(() => {
        if (props.allProducts.length < 1) {
            props.getOneProduct(id)
                .then(response => setProd(response))
        }

    }, [id])
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{"Product Details"}</Text>
                <Image source={{ uri: prod.image }} style={styles.image} />
                <Text style={styles.text}>{prod.name}</Text>
                <Text style={styles.text}>{prod.description}</Text>

                <Text style={styles.text}>{prod.price}</Text>
                <Text style={styles.text}>{prod.stock}</Text>

                <Button
                    onPress={() => props.addToCart(prod._id)} 
                    title="Go to Places"
                />

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


/* const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 300,
        marginBottom: 10,

    },
    image: {
        width: "100%",
        height: "100%",

    },
    text: {
        width: "100%",
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        zIndex: 10,
        position: "absolute",
        top: "40%"
    }
}); */