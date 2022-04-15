import React, { useEffect, useLayoutEffect, useState, ImageBackground } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { color } from "react-native-reanimated";
import { connect } from "react-redux";
import productActions from "../../redux/actions/productActions";
/* import Stack from '../Navigation/Stack' */

const Detalle = (props) => {
  const { id } = props.route.params;
  const [prod, setProd] = useState(
    props.allProducts.filter((prod) => prod._id === id)[0]
  );

  useEffect(() => {
    if (props.allProducts.length < 1) {
      props.getOneProduct(id).then((response) => setProd(response));
    }
  }, [id]);

  return (
    <>
      
      <View style={styles.container}>
        <Text style={styles.text}>{"Product Details"}</Text>
        <Image source={{ uri: prod.image }} style={styles.image} />
        <Text style={styles.name}>{prod.name}</Text>
        <Text style={styles.description}>{prod.description}</Text>

        <View style={styles.containerb}>
          <Text style={styles.price}>{"Price: " + "$ " + prod.price}</Text>
          <Text style={styles.stock}>{"Stock: " + "$ " + prod.stock}</Text>
        </View>

        <TouchableOpacity
          onPress={() => props.addToCart(prod._id)}
          title="Store"
          fontFamily="serif"
          style={{
            alignSelf: "center",
            justifyContent:"center",
            alignItems: "center",
            backgroundColor: "#F3A446",
            width: "40%",
            height: 60,
            borderRadius: 35,
            padding: 4,
            justifySelf: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 22, alignItems:"center",  justifySelf: "center" }}>Store</Text>
        </TouchableOpacity>
      </View>

    </>
  );
};

const mapDispachToProps = {
  getOneProduct: productActions.getOneProduct,
  addToCart: productActions.addToCart,
};
const mapStateToProps = (state) => {
  return {
    allProducts: state.productReducer.allProducts,
    cart: state.productReducer.cart,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Detalle);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 900,
    marginBottom: 10,
    backgroundColor: "#242424"
  },
  containerb: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 25,
    marginBottom: 15,
    backgroundColor: "#242424",
    marginBottom: 25,
  },
  image: {
    width: "70%",
    height: "30%",
    alignSelf: "center",
    margin: 10, 

    resizeMode: 'contain'
  },
  name: {
    width: "80%",
    height: 30,
    alignSelf: "center",
    textAlign: "center",
    color: "#F3A446",
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 25,
  },

  text: {
    width: "100%",
    color: "white",
    fontSize: 20,
    lineHeight: 54,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#252525",
  },
  description: {
    width: "100%",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 25,
  },
  price: {
    width: "40%",
    textAlign: "center",
    color: "white",
  },
  stock: {
    width: "40%",
    textAlign: "center",
    color: "white",
  },
});
