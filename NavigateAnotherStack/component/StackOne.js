import React from 'react';
import {Text, View, Button} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OneScreen from './OneScreen';
import SecondSreen from './SecondScreen';
import ThreeScreen from './ThreeScreen';



const Stack_1 = createNativeStackNavigator();

const StackOne = () => {
    
  <Stack_1.Navigator initialRouteName='OneScreen'>
    <Stack_1.Screen name='One'      component={OneScreen}/>
    <Stack_1.Screen name ='Two'     component={SecondSreen}/>
    <Stack_1.Screen name ='Three'   component={ThreeScreen}/>
  </Stack_1.Navigator>;
};
export default StackOne;
