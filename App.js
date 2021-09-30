import React from 'react';
import Tabs from './screens/tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './screens/DrawerContentScreen';
import  { useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

const Drawer = createDrawerNavigator();


import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import RootStackScreen from './screens/RootStackScreen';
import { set } from 'react-native-reanimated';



const  App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  
  return (
      <NavigationContainer>

        <RootStackScreen />
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Tabs} />
        </Drawer.Navigator> */}
      </NavigationContainer>
  

  );
}

export default App;