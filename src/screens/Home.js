import React,{useEffect} from 'react'
import { Button, Image, View, ImageBackground, ScrollView, Text, TouchableOpacity, Feather } from 'react-native';
import productActions from "../../redux/actions/productActions"
import { connect } from 'react-redux';
import Carusel from '../components/Carusel';

function HomePag(props) {

  useEffect(() => {

    if(!props.allProducts){

      props.getAllProducts()
    }

}, [])
  return (
    <ScrollView>
      <ImageBackground source={{ uri: 'https://i.ibb.co/2gHfJjq/Fondo-App-Macchiato-2.jpg' }} style={{ width: "100%", minHeight: 1000 }}>
        <View style={{
          height: 300,
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

            <Image
              source={require("../../assets/favicon.png")}
              style={{ width: 120, height: 120, alignSelf: "flex-start" }}
            />
          </ImageBackground>
        </View>
        <View style={{ display: 'flex', height: 130, width: '100%', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-around', marginTop: 30 }}>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Store')}
            title="Store"
            fontFamily='serif'
            style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#F3A446", width: "40%", height: 60, borderRadius: 35, padding: 4 }}


          ><Text style={{ color: "#000", fontSize: 22 }}>Store</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('AboutUs')}
            title="AboutUs"
            fontFamily='serif'
            style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#F3A446", width: "40%", height: 60, borderRadius: 35, padding: 4 }}


          ><Text style={{ color: "#000", fontSize: 22 }}>About us</Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', height: 80, width: '100%', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: "#efeefe", fontSize: 32, marginTop: 16, borderBottomColor: '#fff', borderBottomWidth: 3, paddingBottom: 5 }}>Our items categories</Text>
        </View>

        <View style={{ display: 'flex', minHeight: 80, width: '100%', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ color: "#efeefe", fontSize: 20, }}>Speciality Coffee</Text>
          <Text style={{ color: "#efefefad", fontSize: 18, marginTop: 8, width: "70%", textAlign: "center" }}>Exclusive Coffes and trademarks from around the world.</Text>
        </View>

        <View style={{ display: 'flex', minHeight: 80, width: '100%', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ color: "#efeefe", fontSize: 20, }}>Coffee roasters</Text>
          <Text style={{ color: "#efefefad", fontSize: 18, marginTop: 8, width: "70%", textAlign: "center" }}>We are manufacturers of coffe roasting machines contact us</Text>
        </View>

        <View style={{ display: 'flex', minHeight: 80, width: '100%', flexDirection: 'column', alignContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ color: "#efeefe", fontSize: 20, }}>Coffee courses</Text>
          <Text style={{ color: "#efefefad", fontSize: 18, marginTop: 8, width: "70%", textAlign: "center" }}>At Macchiato we have an educational system for baristas</Text>
        </View>
        <Carusel/>
      </ImageBackground>
    </ScrollView>
  )
}



const mapDispatchToProps = {
  getAllProducts: productActions.getAllProducts
}


export default connect(null, mapDispatchToProps)(HomePag);