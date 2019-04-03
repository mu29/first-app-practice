import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    let content = ''
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="여기에 입력해주세요"
          onChangeText={(text) => { content = text }}
          style={styles.input}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => { Alert.alert(content) }}
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
  input: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 16,
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
