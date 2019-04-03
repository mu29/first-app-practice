import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => { Alert.alert('눌렀어요!') }}
        >
          <View style={styles.box}>
            <Text style={styles.first}>시작하기</Text>
          </View>
        </TouchableOpacity>
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
  box: {
    flexDirection: 'row',
    backgroundColor: '#6830CF',
    padding: 16,
  },
  first: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    padding: 16,
  }
});
