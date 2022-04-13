import { connect } from 'react-redux';
import userActions from "../../redux/actions/userAction"
import React, { useRef, useState } from 'react';
import { Button, TextInput, View, ImageBackground, ScrollView, Text, TouchableOpacity, Feather } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FormSignUp = (props) => {
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        photoURL: "",
        country: "",
        from:"signup"
    })

    function enviar() {

        // alert("Under construction")

        console.log(signUp)
        props.signUp(signUp)

    }


    return (
        <ScrollView>
            <ImageBackground source={{ uri: "https://papers.co/wallpaper/papers.co-vh91-watercolor-texture-dark-black-pattern-36-3840x2400-4k-wallpaper.jpg" }} style={{ width: "100 %", display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700 }}>
                <View style={{ backgroundColor: '#000', width: '90%', minHeight: 500, alignSelf: 'center', backgroundColor: "rgba(26, 26, 26, 0.999)", borderRadius: 10 }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', fontFamily: 'serif', paddingTop: 20, color: '#fff', textShadowColor: '#17F5F9', marginBottom: 30 }}>
                        Sign Up
                    </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'white', backgroundColor: "rgba(39, 37, 37, 0.833)", borderWidth: 1, padding: 10, width: '80%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        placeholder="First Name"
                        placeholderTextColor="white"
                        textAlign='justify'
                        borderRadius={5}
                        padding={10}
                        fontSize={15}
                        color="#fff"
                        marginBottom={10}

                        onChangeText={(text) => { setSignUp({ ...signUp, firstName: text }) }}

                    />

                    <TextInput
                        style={{ height: 40, borderColor: "white", backgroundColor: "rgba(39, 37, 37, 0.833)", borderWidth: 1, padding: 10, width: '80%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        placeholder="Last  Name"
                        placeholderTextColor="white"
                        textAlign='justify'
                        borderRadius={5}
                        padding={10}
                        fontSize={15}
                        color="#fff"
                        marginBottom={10}
                        onChangeText={(text) => { setSignUp({ ...signUp, lastName: text }) }}

                    />

                    <TextInput
                        style={{ height: 40, borderColor: "white", backgroundColor: "rgba(39, 37, 37, 0.833)", borderWidth: 1, padding: 10, width: '80%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        placeholder="E-mail"
                        placeholderTextColor="white"
                        textAlign='justify'
                        borderRadius={5}
                        padding={10}
                        fontSize={15}
                        color="#fff"
                        marginBottom={10}

                        onChangeText={(text) => { setSignUp({ ...signUp, email: text }) }}

                    />

                    <TextInput
                        style={{ height: 40, borderColor: "white", backgroundColor: "rgba(39, 37, 37, 0.833)", borderWidth: 1, padding: 10, width: '80%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="white"
                        textAlign='justify'
                        borderRadius={5}
                        padding={10}
                        fontSize={15}
                        color="#fff"
                        marginBottom={10}
                        secureTextEntry={true}
                        onChangeText={(text) => { setSignUp({ ...signUp, password: text }) }}

                    />

                    <TextInput
                        style={{ height: 40, borderColor: "white", backgroundColor: "rgba(39, 37, 37, 0.833)", borderWidth: 1, padding: 10, width: '80%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        placeholder="Photo URL"
                        placeholderTextColor="white"
                        textAlign='justify'
                        borderRadius={5}
                        padding={10}
                        fontSize={15}
                        color="#fff"
                        marginBottom={10}


                        onChangeText={(text) => { setSignUp({ ...signUp, photoURL: text }) }}

                    />
                    <TextInput
                        style={{ height: 40, borderColor: "white", backgroundColor: "rgba(39, 37, 37, 0.833)", borderWidth: 1, padding: 10, width: '80%', alignSelf: 'center', marginTop: 10, }}
                        underlineColorAndroid="transparent"
                        placeholder="Country"
                        placeholderTextColor="white"
                        textAlign='justify'
                        borderRadius={5}
                        padding={10}
                        fontSize={15}
                        color="#fff"
                        marginBottom={10}


                        onChangeText={(text) => { setSignUp({ ...signUp, country: text }) }}

                    />
                    <TouchableOpacity
                        onPress={enviar}
                        title="Home"
                        fontFamily='serif'
                        style={{
                            alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 20, backgroundColor: "black",
                            width: 70, height: 40, borderRadius: 5, marginLeft: "auto", marginRight: "auto"
                        }}


                    ><Text style={{ color: "brown", fontSize: 20 }} >
                            <FontAwesome name="send-o" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </ScrollView>
    );
}


const mapDispatchToProps = {
    signUp: userActions.signUp
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp)