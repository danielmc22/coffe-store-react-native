import * as React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import OpenPag from '../screens/open';
import { Text, View, Image } from "react-native"
import FormSignIn from "../screens/signInScreen"
import FormSignUp from "../screens/signUpScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


import userAction from "../../redux/actions/userAction"
import { Feather } from '@expo/vector-icons';





const CustomDrawer = (props, propsHijo) => {



    return (
        <DrawerContentScrollView {...propsHijo} style={styles.container}>
            {console.log("----------------------")}
            {console.log(props.user)}
            {console.log("----------------------")}
            <View>

                {props.user ? (
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", marginBottom: 30, alignItems: "center" }}>
                        <Image style={styles.userImage} source={{ uri: props.user?.photoURL }} />
                        <Text style={{ marginLeft: 8 }}> {" " + props.user.name.firstName + " " + props.user.name.lastName}</Text>
                        <DrawerItem label="Sign Out" onPress={() => props.signOut()} />
                    </View>
                ) : (
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", marginBottom: 30, alignItems: "center" }}>
                        <Image style={styles.userImage} source={require("../../assets/avatar.png")} />
                        <Text style={{ marginLeft: 8 }}> Disconnected</Text>
                    </View>
                )}
            </View>

            <Text style={styles.title}> Macchiato </Text>

            {props.user ? (

                <TouchableOpacity style={styles.buttonContainer} name="Open" onPress={() => props.signOut()} >
                    <Text style={styles.textButtom}> Sign Out</Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity style={styles.buttonContainer} name="SignIn" onPress={() => props.navigation.navigate("SignIn")} >
                        <Text style={styles.textButtom}> Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} name="SignUp" onPress={() => props.navigation.navigate("SignUp")} >
                        <Text style={styles.textButtom}> Sign Up</Text>
                    </TouchableOpacity>
                </>
            )}

            <TouchableOpacity style={styles.buttonContainer} name="Home" onPress={() => props.navigation.navigate("Home")} >
                <Text style={styles.textButtom}> Home </Text>
                <Feather name="coffee" size={24} color="#F3A446" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} name="AboutUs" onPress={() => props.navigation.navigate("AboutUs")} >
                <Text style={styles.textButtom}> About Us </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} name="Store" onPress={() => props.navigation.navigate("Store")} >
                <Text style={styles.textButtom}> Shop</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );




};

const styles = ({
    container: {
        padding: 15,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#1d1d1d',
        marginBottom: 40,
        textAlign: "center"
    },
    buttonContainer: {
        backgroundColor: '#1d1d1d',
        marginBottom: 15,
        borderRadius: 10,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',

    },
    textButtom: {
        color: '#F3A446',
        fontWeight: "900",
        fontSize: 18,

    },
    userImage: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(39, 37, 37, 0.849)",
        borderRadius: 50,
        padding: 15,
        marginLeft: 7,
    }
});


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        authorized: state.userReducer.authorized,
        cart: state.productReducer.cart,
        user: state.userReducer.user,
        authorized: state.userReducer.authorized

    }
}

const mapDispatchToProps = {
    signOut: userAction.signOut,
    verifyToken: userAction.verifyToken,
    verifiedRol: userAction.verifiedRol,
    //  /* iniciarAlRecargar: productActions.iniciarAlRecargar*/

}
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);


