import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OpenPag from '../screens/open';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Open">
      <Drawer.Screen name="Open" component={OpenPag} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator