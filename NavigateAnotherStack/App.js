import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackOne from './component/StackOne';
import StackTwo from './component/StackTwo';
import FourScreen from './component/FourScreen';
import FiveScreen from './component/FiveScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name ='Four' component={FourScreen}/>
        <Stack.Screen name ='Five' component={FiveScreen}/>
        <Stack.Screen  name ='ScreenOne' component={StackOne}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
