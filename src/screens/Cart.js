import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

function CartBuy() {
  return (
    <ScrollView>
      <ImageBackground source={require('../../assets/fondo_alto.jpg')} style={{ width: "100%", minHeight: 1000 }}>
        <Text style={{ fontSize: 30, color: '#efeefe' }}></Text>
      </ImageBackground>
    </ScrollView>
  )
}

export default CartBuy