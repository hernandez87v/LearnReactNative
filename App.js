import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import Icon from 'react-native-vector-icons/FontAwesome';
// const myButton = (<Icon.Button name="instagram" size={30} color="#900">Check My Instagram!</Icon.Button>);

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="1st React Native App" />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonLayout}
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />
        <Icon.Button name="rocket" backgroundColor="#3b5998">
            Login with Facebook
        </Icon.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    margin: 40,
  },
  buttonLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
