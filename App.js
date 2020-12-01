import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="1st React Native App" />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
