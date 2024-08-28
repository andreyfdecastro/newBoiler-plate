import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


import styles from './styles'
import Mybutton from '../../components/MyButon'


export default function Ghible() {
  return (
    <View style={styles.container}>
     <Mybutton screen="Home" name="Go to Home" />
     <Mybutton screen="Totoro" name="Go to Totoro" />
    </View>
  )
}