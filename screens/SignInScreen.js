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




const SignIn = ({navigation}) => {

    
    
   const [text, onChangeText] = React.useState(null);
   const [password, onChangePassword] = React.useState(null);

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
              <Text>footer</Text>
              <TouchableOpacity  ouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.loginButton}>Login</Text>
              </TouchableOpacity>
            </View> 
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