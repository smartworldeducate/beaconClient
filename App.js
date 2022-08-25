import React from 'react';
import Login from './src/compenents/login';
import Admin from './src/compenents/admin';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Scanner from './src/compenents/scanner';
import Splash from './src/compenents/defalutScreen';
import Signup from './src/compenents/signUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#eb4d4b"/>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={Splash}
          options={{
            headerStyle: {backgroundColor: '#FC427B'},
           
           
          }}
          
        />
        <Stack.Screen name="Login" component={Login} screenOptions={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
