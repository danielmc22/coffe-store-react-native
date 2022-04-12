import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import OpenPag from '../screens/open';
import { Text, View, Image } from "react-native"
import FormSignIn from "../screens/signInScreen"
import FormSignUp from "../screens/signUpScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { version } from 'react-dom';
import Home from '../screens/Home';
import productActions from '../../redux/actions/productActions';
import userAction from "../../redux/actions/userAction"
import { useEffect } from 'react';



const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {


  useEffect(() => {
    if (AsyncStorageLib.getItem("token") !== null) {
      const token = AsyncStorageLib.getItem("token")
      props.verifyToken(token)
      props.verifiedRol(AsyncStorageLib.getItem("token"))
      // .then(res => setAuthorized(res))
      props.iniciarAlRecargar()
    }

  }, [])
  return (
    <Drawer.Navigator initialRouteName="Open"
      drawerContent={props => <CustomDrawer {...props} user={props.user} />}
    >
      {console.log("----------------------")}
      {console.log(props.user?.email)}
      {console.log("----------------------")}
      <Drawer.Screen name="Open" component={OpenPag} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="SignIn" component={FormSignIn} />
      <Drawer.Screen name="SignUp" component={FormSignUp} />
    </Drawer.Navigator>
  )
}

// export default DrawerNavigator

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
  iniciarAlRecargar: productActions.iniciarAlRecargar

}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);









const CustomDrawer = (props) => {
  async function ver() {
    console.log(await AsyncStorageLib.getItem("token"));

  }


  console.log("----------------------");
  // console.log(props);
  // console.log("----------------------");
  // ver()
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <Text style={styles.title}> Macchiato </Text>
      {props.user ? (
        <Image style={styles.userImage} source={{ uri: props.user.photoURL }} />

      ) : (
        <Image style={styles.userImage} source={require("../../assets/avatar.svg")} />

      )}




      <TouchableOpacity style={styles.buttonContainer} name="Open" onPress={() => props.navigation.navigate("Open")} >
        <Text style={styles.textButtom}> Open</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} name="Shop" onPress={() => props.navigation.navigate("Shop")} >
        <Text style={styles.textButtom}> Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} name="SignIn" onPress={() => props.navigation.navigate("SignIn")} >
        <Text style={styles.textButtom}> Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} name="SignUp" onPress={() => props.navigation.navigate("SignUp")} >
        <Text style={styles.textButtom}> Sign Up</Text>
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
    marginBottom: 20,
    color: '#1d1d1d',
  },
  buttonContainer: {
    backgroundColor: '#1d1d1d',
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,

  },
  textButtom: {
    color: '#a06235',
  },
  userImage: {
    width: 50,
    height: 50,
    backgroundColor: "grey"
  }
});