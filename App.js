import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='1st React Native App'/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
