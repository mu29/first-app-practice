import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const StartButton = ({
  showAlert,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={disabled ? null : showAlert}
    >
      <View style={disabled ? styles.disabled : styles.box}>
        <Text style={styles.text}>
          시작하기
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#6830CF',
    padding: 16,
  },
  disabled: {
    backgroundColor: '#9E9E9E',
    padding: 16,
  },
  text: {
    color: '#FFFFFF'
  },
})

export default StartButton
