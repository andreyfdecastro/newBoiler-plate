import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'


export default function Totoro() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text styles={styles.tittle}>My Neigbor Totoro</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text styles={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}