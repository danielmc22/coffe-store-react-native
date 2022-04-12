import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react'

function OpenPag({ navigation }) {
  return (
    <ScrollView >
      <View style={styles.containerImage}>
        <ImageBackground source={{ uri: 'https://png.pngtree.com/background/20210717/original/pngtree-mobile-wallpaper-a-cup-of-coffee-hello-picture-image_1446776.jpg' }} style={styles.image}>

          <Text style={{ position: 'absolute', color: '#000', fontSize: 20, left: 60 }} >Macchiato</Text>
        </ImageBackground>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  containerImage: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 200,

  },

  image: {
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 200,
  },
});

export default OpenPag