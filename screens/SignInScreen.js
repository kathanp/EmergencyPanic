import React from 'react';
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

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';



const SignIn = ({navigation}) => {

  const { colors } = useTheme();
    
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}



    return (
      <View style={styles.container}>
        {/* <View style={styles.signinform}>
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"/>
          
          <TextInput
          style={styles.input}
          onChangePassword={onChangePassword}
          placeholder="Password"
          value={password}/>
        </View> */}

        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome 
                name="user-o"
                color= "#05375a"
                size={20}
              /> 
              <TextInput
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={styles.text_footer,{
              marginTop: 35
            }}>Password</Text>
            <View style={styles.action}>
              <FontAwesome 
                name="lock"
                color= "#05375a"
                size={20}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"/>
              <Feather 
                name="eye-off"
                color="grey"
                size={20}/>
                
            </View>
          </View> 

            {/* <View style={styles.footer}>
              <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"

                        color={colors.text}
                        size={20}/>
                    <TextInput 
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        autoCapitalize="none"/>
                  
                      
                  <Animatable.View
                        animation="bounceIn">
                  
                    <TouchableOpacity>
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}/>
                </TouchableOpacity>
                </Animatable.View>
                 </View> 
            </View> */}
        
       
        </View>
    );
};
export default SignIn;





const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});



// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     backgroundColor: '#009387'
//   },
//   input: {
//     height: 40,
//     margin: 10,
//     borderWidth: 1,
  
//   },
  
//   signinform:{
//     flex: 0.5,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },

//   loginButton:{
//     fontSize: 30,
//     fontWeight: "bold",
//   },
  
  
//   text_header: {
//       color: '#fff',
//       fontWeight: 'bold',
//       fontSize: 30
//   },
//   text_footer: {
//       color: '#05375a',
//       fontSize: 18
//   },
//   textInput: {
//       flex: 1,
//       marginTop: Platform.OS === 'ios' ? 0 : -12,
//       paddingLeft: 10,
//       color: '#05375a',
//   },
//   button: {
//       alignItems: 'center',
//       marginTop: 20,
//       flexDirection: 'column',
//       justifyContent: 'center',
//   },

//   textSign: {
//       fontSize: 18,
//       fontWeight: 'bold'
//   },


// });



// <TouchableOpacity  ouchableOpacity
// style={styles.button}
// onPress={() => navigation.navigate('SignUp')}>
// <Text style={styles.loginButton}>Login</Text>
// </TouchableOpacity>