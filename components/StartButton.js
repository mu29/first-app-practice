import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const StartButton = ({
  showAlert,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={showAlert}
    >
      <View style={styles.box}>
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
  text: {
    color: '#FFFFFF'
  },
})

export default StartButton
