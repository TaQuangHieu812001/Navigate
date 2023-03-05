import React from 'react';
import {Text, View, Button} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FourScreen from './FourScreen';
import FiveScreen from './FiveScreen';
import SixScreen from './SixScreen';


const Stack_2 = createNativeStackNavigator();

const StackTwo = () => {
  <Stack_2.Navigator>
    <Stack_2.Screen name ='Four' component={FourScreen}/>
    <Stack_2.Screen name="Five" component={FiveScreen} />
    <Stack_2.Screen name="Six" component={SixScreen} />
  </Stack_2.Navigator>;
};
export default StackTwo;
