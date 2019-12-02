import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PickImage from './PickImage';

export default function App() {
  console.log(styles);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50}}>Open up App.js to start working on your app!</Text>
      <PickImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
