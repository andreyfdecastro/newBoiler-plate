import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'


export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text styles={styles.tittle}>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Totoro")}>
        <Text styles={styles.text}>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}