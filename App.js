import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text >
        First React Native App
      </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
