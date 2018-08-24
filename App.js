import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Tararam11</Text>
        <Text>Nama : Auliana Rizky</Text>
        <Text>Kelas : XI RPL 2</Text>
        <Text>Absen : 11</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
