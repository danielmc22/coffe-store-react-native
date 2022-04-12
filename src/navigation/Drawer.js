import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OpenPag from '../screens/open';
import FormSignIn from "../screens/signInScreen"
import FormSignUp from "../screens/signUpScreen"
import Home from '../screens/Home';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Open">
      <Drawer.Screen name="Open" component={OpenPag} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="SignIn" component={FormSignIn} />
      <Drawer.Screen name="SignUp" component={FormSignUp} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator