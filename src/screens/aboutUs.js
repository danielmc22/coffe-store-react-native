import React from 'react';
import { Image, View, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';

function AboutUs({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground source={{ uri: 'https://i.ibb.co/2gHfJjq/Fondo-App-Macchiato-2.jpg' }} style={{ width: "100%", minHeight: 1000, display: 'flex' }}>
        <View style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          overflow: "hidden",
        }}>
          <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1596098823457-74e360fcd023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8,

          }}>
          </ImageBackground>
        </View>
        <View style={{ display: 'flex', height: 500, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: "pink", alignSelf: 'center' }}>
          <Text style={{ color: "#efeefe" }}>aspasoaspdoapsodsaaaaaaaaaaaaaaaaaaasasaa</Text>
        </View>
      </ImageBackground>
    </ScrollView >
  )
}

export default AboutUs