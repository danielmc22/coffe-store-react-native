import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from './redux/reducers/mainReducer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/Drawer';

export default function App() {
  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore} style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'column' }}>
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor='#17F5F9' />
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}


