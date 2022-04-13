import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import OpenPag from '../screens/open';
import { Text, View, Image } from "react-native"
import FormSignIn from "../screens/signInScreen"
import FormSignUp from "../screens/signUpScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { version } from 'react-dom';
import Home from '../screens/Home';
import productActions from '../../redux/actions/productActions';
import userAction from "../../redux/actions/userAction"
import { useEffect } from 'react';
import CustomDrawer from "../components/DrawerCustom"
import Shop from '../screens/Shop';
import AboutUs from '../screens/aboutUs';
import StoreNavigator from "../navigation/Stack"


const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {

  // const [user, setUser] = useState(props?.user)


  useEffect(() => {
    let tokenP = ""
    AsyncStorage.getItem("token").then(res => {
      console.log(res)

    })
    AsyncStorage.getItem("token").then(res => props.verifyToken(res))
    AsyncStorage.getItem("token").then(res => props.verifiedRol(res))
    // setUser(props.user)
    // console.log("user user user ");
    // console.log(user);
    // console.log("user user user ");


  }, [])





  return (
    <Drawer.Navigator initialRouteName="Open"
      drawerContent={props => <CustomDrawer  {...props} />}
    >

      {console.log("-----------Ususraio en redux-----------")}
      {console.log(props.user)}
      {console.log("-----------Fin Ususraio en redux-----------")}

      <Drawer.Screen name="Open" component={OpenPag} />
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Store" component={Shop} /> */}
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="StoreNavigator" component={StoreNavigator} />
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
  //  /* iniciarAlRecargar: productActions.iniciarAlRecargar*/

}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);









// const CustomDrawer = (propsHijo) => {



//   return (
//     <DrawerContentScrollView {...propsHijo} style={styles.container}>
//       {console.log("----------------------")}
//       {console.log(props)}
//       {console.log("----------------------")}
//       <View>

//         {props.user ? (
//           <View style={{ width: "100%", display: "flex", flexDirection: "row", marginBottom: 30, alignItems: "center" }}>
//             <Image style={styles.userImage} source={{ uri: props.user.photoURL }} />
//             <Text> {" " + props.user.name.firstName + " " + props.user.name.lastName}</Text>
//           </View>
//         ) : (
//           <View style={{ width: "100%", display: "flex", flexDirection: "row", marginBottom: 30, alignItems: "center" }}>
//             <Image style={styles.userImage} source={require("../../assets/avatar.png")} />
//             <Text> Disconnected</Text>
//           </View>
//         )}

//       </View>
//       <Text style={styles.title}> Macchiato </Text>


//       <TouchableOpacity style={styles.buttonContainer} name="Open" onPress={() => props.navigation.navigate("Open")} >
//         <Text style={styles.textButtom}> Open</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.buttonContainer} name="Home" onPress={() => props.navigation.navigate("Home")} >
//         <Text style={styles.textButtom}> Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.buttonContainer} name="AboutUs" onPress={() => props.navigation.navigate("AboutUs")} >
//         <Text style={styles.textButtom}> About Us</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.buttonContainer} name="Shop" onPress={() => props.navigation.navigate("Shop")} >
//         <Text style={styles.textButtom}> Shop</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.buttonContainer} name="SignIn" onPress={() => props.navigation.navigate("SignIn")} >
//         <Text style={styles.textButtom}> Sign In</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.buttonContainer} name="SignUp" onPress={() => props.navigation.navigate("SignUp")} >
//         <Text style={styles.textButtom}> Sign Up</Text>
//       </TouchableOpacity>
//     </DrawerContentScrollView>
//   );




// };

// const styles = ({
//   container: {
//     padding: 15,
//     backgroundColor: '#fff',
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: '#1d1d1d',
//     marginBottom: 40,
//     textAlign: "center"
//   },
//   buttonContainer: {
//     backgroundColor: '#1d1d1d',
//     marginBottom: 15,
//     borderRadius: 10,
//     padding: 15,

//   },
//   textButtom: {
//     color: '#a06235',
//     fontWeight: "900",
//     fontSize: 20
//   },
//   userImage: {
//     width: 50,
//     height: 50,
//     backgroundColor: "rgba(39, 37, 37, 0.849)",
//     borderRadius: 50,
//     padding: 15
//   }
// });