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
  number,
  SafeAreaView,
  Button,
} from 'react-native';


  

const SignUp = ({navigation}) => {

  const [name, onChangeName] = React.useState(null);
   const [text, onChangeText] = React.useState(null);
   const [password, onChangeNumber] = React.useState(null);

    return (
      <SafeAreaView style={styles.container}>
        <View  style={styles.signupform}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Full Name"
        
          />

          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
          
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
           
          />
        </View>

        
        <TouchableOpacity  ouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.loginButton}>Signup</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
  
  },
  
  signinform:{
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  loginButton:{
    fontSize: 30,
    fontWeight: "bold",
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
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 20,
      flexDirection: 'column',
      justifyContent: 'center',
  },

  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },

});