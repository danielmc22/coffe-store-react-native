import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";
import React, { useState, useEffect } from 'react';
import getCiudades from "./apiCalls"
// import { Text, Dimensions, StyleSheet, View, Image, ScrollView } from 'react-native';

// import { LinearGradient } from "expo-linear-gradient";



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 4;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {

  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
          backgroundColor: "transparent"
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
    </View>
  );
}

export default function App() {
  const [ArrayDatos, setDatos] = useState([])

  useEffect(() => {

    getCiudades().then(response => {
      let ciudades = response.data.response.ciudades
      ciudades.length = 12


      setDatos((ciudades))
      // console.log("Estas son las ciudades")
      // console.log(ArrayDatos)
    })


  }, [])


  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 150,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={12}
        data={ArrayDatos}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Animated.View
                style={{
                  marginHorizontal: ESPACIO,
                  padding: ESPACIO,
                  borderRadius: 15,
                  backgroundColor: "brown",
                  alignItems: "center",
                  transform: [{ translateY: scrollY }],
                }}
              >
                <Image source={{ uri: `https://mytinerarry-olguin.herokuapp.com/imagenes/${item.imagen}` }} style={styles.posterImage} />
                <Text style={{ fontWeight: "bold", fontSize: 26, color: "#fff", }}>
                  {" "}
                  {item.ciudad}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "80%",
    backgroundColor: "transparent",
    justifyContent: "center",
    marginBottom: 36,
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.1,
    resizeMode: "cover",
    borderRadius: 15,
    margin: 0,
    marginBottom: 10,
  },
});

// import React, { useState, useEffect } from 'react';
// import { Text, Dimensions, StyleSheet, View, Image, ScrollView } from 'react-native';

// const [ArrayDatos, setDatos] = useState([])

// useEffect(() => {

//     getCiudades().then(response => {
//         setDatos((response.data.response.ciudades))
//         // console.log("Estas son las ciudades")
//         // console.log(ArrayDatos)
//     })
//     ArrayDatos.length = 12

// }, [])