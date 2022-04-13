import { connect } from 'react-redux';
import userActions from "../../redux/actions/userAction"
import React, { useState } from 'react';
import { Button, TextInput, View, ImageBackground, ScrollView, Text, TouchableOpacity, Feather,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';






const FormSignIn = (props) => {


    const [signIn, setSignIn] = useState({
        email: "",
        password: "",
        from: "signup",
    })

    function enviar() {
        // console.log(signIn)

        // alert("Under construction")
        props.signIn(signIn)

    }

    return (
        <ImageBackground source={{ uri: "https://papers.co/wallpaper/papers.co-vh91-watercolor-texture-dark-black-pattern-36-3840x2400-4k-wallpaper.jpg" }} style={{ width: "100 %", display: 'flex', alignItems: 'center', justifyContent: 'center', height: 700 }}>
            {/* {console.log("-------------------------------------------------------------------")} */}
            {/* {console.log(props.user.email)} */}
            {/* {console.log("-------------------------------------------------------------------")} */}
            {/* <Image style={{width:200,height:200}} source={{uri:props.user.photoURL}}/> */}
            <View style={{ backgroundColor: "#f3a446", width: '90%', minHeight: 300, alignSelf: 'center', borderRadius: 10 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', fontFamily: 'serif', paddingTop: 20, color: 'black', textShadowColor: '#17F5F9', marginBottom: 30 }}>
                    Sign In
                </Text>



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

                    onChangeText={(text) => { setSignIn({ ...signIn, email: text }) }}

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

                    onChangeText={(text) => { setSignIn({ ...signIn, password: text }) }}
                />


                <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    onPress={enviar}
                    title=""
                    fontFamily='serif'
                    style={{ alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 20, backgroundColor: "black", width: 70, height: 40, borderRadius: 5, marginLeft: "auto", marginRight: "auto" }}
                >
                    <Text style={{ color: "brown", fontSize: 20 }}><FontAwesome name="send-o" size={24} color="white" /></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('SignUp')}
                    title="SignUp" style={{ color: "white", fontSize: 30, width: "100%" }}>

                </TouchableOpacity>

            </View>


        </ImageBackground>
    );
}


// const mapDispatchToProps = {
//     signIn: usuariosActions.signIn
// }

// const mapStateToProps = (state) => {
//     return {
//         user: state.usuariosReducer.user

//     }
// }

const mapDispatchToProps = {
    signIn: userActions.signIn
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn)
