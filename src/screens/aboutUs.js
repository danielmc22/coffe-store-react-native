import React from 'react';
import { Image, View, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';

function AboutUs({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground source={require('../../assets/fondo_alto.jpg')} style={{ width: "100%", minHeight: 1000, display: 'flex' }}>
        <View style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          overflow: "hidden",
        }}>
          <ImageBackground source={require('../../assets/Home3.png')} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8,

          }}>
          </ImageBackground>
        </View>
        <View style={{ display: 'flex', minHeight: 500, width: '90%', backgroundColor: "#efeefe", alignSelf: 'center', position: 'relative', top: -50, borderRadius: 5 }}>
          <Text style={{ color: "#000", fontSize: 32, textAlign: 'center', paddingTop: 15, fontWeight: 'bold' }}>About Us</Text>
          <Text style={{ color: "#000", fontSize: 28, textAlign: 'left', padding: 20 }}>Macchiato is a chain of coffee shops of its own, whose brand experience is lived in its exclusive premises.</Text>
          <Text style={{ color: "#000", fontSize: 32, textAlign: 'center', paddingTop: 15, fontWeight: 'bold' }}>The Macchiato experience</Text>
          <Text style={{ color: "#000", fontSize: 28, textAlign: 'left', padding: 20 }}>Being able to enjoy Macchiato products in a relaxed atmosphere, and at the same time sharing rewarding moments, were the reasons that gave rise to the creation of the Macchiato Coffee concept. </Text>
        </View>

        <View style={{ display: 'flex', height: 170, justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#efeefe', marginVertical: 8, textAlign: 'center' }}>Federico Olguín</Text>
            <View style={{ borderRadius: 100, backgroundColor: 'black', width: 100, height: 100, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://i.ibb.co/dPGzmVF/federico.jpg' }}
                style={{ width: '100%', height: '100%', borderRadius: 100 }}
              />
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#efeefe', marginVertical: 8, textAlign: 'center' }}>Fernanda Arrieta</Text>
            <View style={{ borderRadius: 100, backgroundColor: 'black', width: 100, height: 100, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://i.ibb.co/n8WY0LB/fernanda.jpg' }}
                style={{ width: '100%', height: '100%', borderRadius: 100 }}
              />
            </View>
          </View>
        </View>

        <View style={{ display: 'flex', height: 170, justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#efeefe', marginVertical: 8, textAlign: 'center' }}>Sebastian Londoño</Text>
            <View style={{ borderRadius: 100, backgroundColor: 'black', width: 100, height: 100, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://i.ibb.co/G3nwb4L/sebastian.jpg' }}
                style={{ width: '100%', height: '100%', borderRadius: 100 }}
              />
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#efeefe', marginVertical: 8, textAlign: 'center' }}>Hernán Funes</Text>
            <View style={{ borderRadius: 100, backgroundColor: 'black', width: 100, height: 100, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://i.ibb.co/rtG6hTZ/hernan.jpg' }}
                style={{ width: '100%', height: '100%', borderRadius: 100 }}
              />
            </View>
          </View>
        </View>

        <View style={{ display: 'flex', height: 170, justifyContent: 'space-evenly', flexDirection: 'row', width: '100%' }}>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#efeefe', marginVertical: 8, textAlign: 'center' }}>Marcia Montivero</Text>
            <View style={{ borderRadius: 100, backgroundColor: 'black', width: 100, height: 100, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://i.ibb.co/nfQM137/marcia.jpg' }}
                style={{ width: '100%', height: '100%', borderRadius: 100 }}
              />
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#efeefe', marginVertical: 8, textAlign: 'center' }}>Daniel Martinez</Text>
            <View style={{ borderRadius: 100, backgroundColor: 'black', width: 100, height: 100, overflow: 'hidden' }}>
              <Image
                source={{ uri: 'https://i.ibb.co/F6ZZJ5C/daniel.jpg' }}
                style={{ width: '100%', height: '100%', borderRadius: 100 }}
              />
            </View>
          </View>
        </View>


      </ImageBackground>
    </ScrollView >
  )
}

export default AboutUs