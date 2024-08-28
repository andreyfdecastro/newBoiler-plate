import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


import styles from './styles'
import Mybutton from '../../components/MyButon'


export default function Home() {
  return (
    <View style={styles.container}>
     <Mybutton screen="Totoro" name="Go to Totoro" />
      <Mybutton screen="Ghibli" name="Go to Ghibli" />
    </View>
  )
}