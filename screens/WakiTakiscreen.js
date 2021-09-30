import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WakiTaki = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>WakiTaki Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default WakiTaki;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});