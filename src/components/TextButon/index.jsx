import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const TextButon = ({text}) => {
  return (
  <view>
      <Text style={styles.text}>{text}</Text>
    </view>
  )
}

export default TextButon