import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import OpenPag from '../screens/open';
import { Text, View, Image } from "react-native"
import FormSignIn from "../screens/signInScreen"
import FormSignUp from "../screens/signUpScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Home from '../screens/Home';
import productActions from '../../redux/actions/productActions';
import userAction from "../../redux/actions/userAction"
import { useEffect, useLayoutEffect } from 'react';
import CustomDrawer from "../components/DrawerCustom"
import { Ionicons } from '@expo/vector-icons';
import AboutUs from '../screens/aboutUs';
import StoreNavigator from "../navigation/Stack"
<<<<<<< HEAD
import CartBuy from '../screens/Cart';
=======
import CartShop from '../components/CartShop';

>>>>>>> 8df4f739185b35fbad6c9856aa2f31770b6e758a

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {

  // const [user, setUser] = useState(props?.user)


  useEffect(() => {
    // let tokenP = ""
    // AsyncStorage.getItem("token").then(res => {
    //   console.log(res)

    // })
    AsyncStorage.getItem("token").then(res => props.verifyToken(res))
    AsyncStorage.getItem("token").then(res => props.verifiedRol(res))
    getData().then(res => props.iniciarAlRecargar(res))
    // setUser(props.user)
    // console.log("user user user ");
    // console.log(user);
    // console.log("user user user ");


  }, [])


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('shopCart')
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <Drawer.Navigator initialRouteName="Open"
      drawerContent={props => <CustomDrawer  {...props} />}

    >

      {/* {console.log("-----------Ususraio en redux-----------")}
      {console.log(props.user)}
      {console.log("-----------Fin Ususraio en redux-----------")} */}

<<<<<<< HEAD
      <Drawer.Screen name="Open" component={OpenPag} />
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Store" component={Shop} /> */}
      <Drawer.Screen name="Cart" component={CartBuy} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="StoreNavigator" component={StoreNavigator} />
      <Drawer.Screen name="SignIn" component={FormSignIn} />
      <Drawer.Screen name="SignUp" component={FormSignUp} />
=======
      <Drawer.Screen options={{ headerRight: (props) => <Ionicons onPress={() => props.navigator.navigate("CartShop")} {...props} name="cart" size={24} color="black" /> }}
        name="Open" component={OpenPag} />
      <Drawer.Screen options={{ headerRight: (props) => <Ionicons onPress={() => props.navigator.navigate("CartShop")} {...props} name="cart" size={24} color="black" /> }}
        name="Home" component={Home} />
      <Drawer.Screen options={{ headerRight: (props) => <Ionicons {...props} name="cart" size={24} color="black" /> }}
        name="AboutUs" component={AboutUs} />
      <Drawer.Screen options={{ headerRight: (props) => <Ionicons {...props} name="cart" size={24} color="black" /> }}
        name="Store" component={StoreNavigator} />
      <Drawer.Screen options={{ headerRight: (props) => <Ionicons {...props} name="cart" size={24} color="black" /> }}
        name="SignIn" component={FormSignIn} />
      <Drawer.Screen options={{ headerRight: (props) => <Ionicons {...props} name="cart" size={24} color="black" /> }}
        name="SignUp" component={FormSignUp} />
      <Drawer.Screen name={"CartShop"} component={CartShop} />
>>>>>>> 8df4f739185b35fbad6c9856aa2f31770b6e758a
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


