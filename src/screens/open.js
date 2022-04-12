import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react'

function OpenPag({ navigation }) {
  return (
    <ScrollView >
      <ImageBackground source={{ uri: 'https://i.ibb.co/2gHfJjq/Fondo-App-Macchiato-2.jpg' }} style={{ width: "100%", height: 620 }}>
        <View style={styles.containerImage}>
          <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1596098823457-74e360fcd023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} style={styles.image}>

            <Text style={{ position: 'absolute', color: '#efeefe', fontSize: 50, alignSelf: 'center', marginHorizontal: 'auto', marginVertical: 'auto' }} >Macchiato</Text>
          </ImageBackground>
        </View>

        <View style={{ display: 'flex', height: 150, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, textAlign: 'center', color: '#efeefe' }}>Welcome to a wonderfull experience with coffe in Macchiato</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          title="Home"
          fontFamily='serif'
          style={{ alignItems: "center", justifyContent: "center", marginTop: 5, marginBottom: 20, backgroundColor: "#F3A446", width: "80%", height: 70, borderRadius: 35, marginLeft: "auto", marginRight: "auto", padding: 4 }}


        ><Text style={{ color: "#000", fontSize: 22 }}>Get started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  containerImage: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    overflow: "hidden",
  },

  image: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
});

export default OpenPag