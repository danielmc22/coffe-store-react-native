import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import OpenPag from '../screens/open';
import { Text, View, Image } from "react-native"
import FormSignIn from "../screens/signInScreen"
import FormSignUp from "../screens/signUpScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import userActions from "../../redux/actions/userAction"
import { connect } from 'react-redux';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { version } from 'react-dom';
const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  return (
    <Drawer.Navigator initialRouteName="Open"
      drawerContent={props => <CustomDrawer {...props} user={props.user} />}
    >
      {console.log("----------------------")}
      {console.log(props.user)}
      {console.log("----------------------")}
      <Drawer.Screen name="Open" component={OpenPag} />
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
    cart: state.productReducer.cart
  }
}

const mapDispatchToProps = {
  signOut: userActions.signOut

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
  buttom: {
    color: "black"
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
    backgroundColor: "black"
  }
});