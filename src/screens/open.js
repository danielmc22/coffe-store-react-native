import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react'

function OpenPag({ navigation }) {
  return (
    <ScrollView >
      <ImageBackground source={{ uri: 'https://i.ibb.co/2gHfJjq/Fondo-App-Macchiato-2.jpg' }} style={{ width: "100%", height: 800 }}>
        <View style={styles.containerImage}>
          <ImageBackground source={{ uri: 'https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} style={styles.image}>

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
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    // borderBottomRightRadius: 170,
    // borderBottomLeftRadius: 170,
    // borderBottomStartRadius: 5,
    // borderBottomEndRadius: 5,
    // borderRadius:10000,
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