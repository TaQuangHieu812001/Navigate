import React from "react";
import {Text,Image,View,SafeAreaView,TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native';
import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

const ThreeScreen =({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Three Screen</Text>
      <Button title="Go to One Screen" onPress={()=>navigation.navigate('One')}></Button>
      <Text></Text>
      <Button title="Go to Two Screen" onPress={()=>navigation.navigate('Two')}></Button>
    </View>
    )
}
export default ThreeScreen;