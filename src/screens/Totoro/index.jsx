import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Mybutton from '../../components/MyButon'


export default function Totoro() {
  return (
    <View style={styles.container}>
   <Mybutton screen="Ghibli" name="Go to Ghibli" />
   <Mybutton screen="Home" name="Go to Home" />
    </View>
  )
}