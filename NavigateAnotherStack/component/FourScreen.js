import React from "react";
import {Text,Image,View,SafeAreaView,TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native';

const FourScreen =({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Four Screen</Text>
      
      <Button title="Go to Two Screen" onPress={()=>navigation.navigate('ScreenOne')}></Button>
    </View>
    )
}
export default FourScreen;