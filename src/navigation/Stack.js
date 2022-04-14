import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from '../screens/Shop';
import Detalle from "../screens/details"

const Stack = createStackNavigator();

function StoreNavigator() {
  return (
    <Stack.Navigator initialRouteName='Store'
      screenOptions={{ headerBackTitle: "Back" }}
    >
      <Stack.Screen name='Store' component={Shop}
        options={{ headerShown: false, }} />

      <Stack.Screen name='Detalle' component={Detalle}
        options={{ headerShown: true, }} />
    </Stack.Navigator>
  )
}


export default StoreNavigator