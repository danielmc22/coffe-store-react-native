import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function StoreNavigator() {
  return (
    <Stack.Navigator initialRouteName=''
      screenOptions={{ headerBackTitle: "Back" }}
    >
      <Stack.Screen name='' component={""}
        options={{ headerShown: false, }} />
    </Stack.Navigator>
  )
}