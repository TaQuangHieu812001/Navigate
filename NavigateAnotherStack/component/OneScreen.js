import React from "react";
import {Text,Image,View,SafeAreaView,TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native';

const OneScreen =({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>One Screen</Text>
      <Button title="Go to Two Screen" onPress={()=>navigation.navigate('Two')}></Button>
        <Text></Text>
      <Button title="Go to Three Screen" onPress={()=>navigation.navigate('Three')}></Button>



      <Text></Text>



    </View>
    )
}
export default OneScreen;