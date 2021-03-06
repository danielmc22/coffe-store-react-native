import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from '../screens/Shop';
import Detalle from "../components/details"

const Stack = createStackNavigator();

function StoreNavigator() {
  return (
    <Stack.Navigator initialRouteName='StoreComp'
      screenOptions={{ headerBackTitle: "Back" }}
    >
      <Stack.Screen name='StoreComp' component={Shop}
        options={{ headerShown: false, }} />

      <Stack.Screen name='Detalle' component={Detalle}
        options={{ headerShown: true, }} />
    </Stack.Navigator>
  )
}


export default StoreNavigator