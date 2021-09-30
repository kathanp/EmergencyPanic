import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';



// import AsyncStorage from '@react-native-community/async-storage';

// const App = () => {
//     // const [isLoading, setIsLoading] = React.useState(true);
//     // const [userToken, setUserToken] = React.useState(null); 
  
//     const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  
//     const initialLoginState = {
//       isLoading: true,
//       userName: null,
//       userToken: null,
//     };
// }

const RootStack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='false'>
        <RootStack.Screen name="Splash" component={SplashScreen}/>
        <RootStack.Screen name="SignIn" component={SignInScreen}/>
        <RootStack.Screen name="SignUp" component={SignUpScreen}/>

       
    </RootStack.Navigator>
);


export default RootStackScreen;
