import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import StartButton from './components/StartButton'

export default class App extends React.Component {
  state = {
    content: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="여기에 입력해주세요"
          onChangeText={(text) => this.setState({ content: text })}
          style={styles.input}
        />
        <StartButton
          showAlert={() => { Alert.alert(content) }}
          disabled={this.state.content.length < 0 ? false : true}
        />
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
