import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'




export default function Totoro() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>My Neigbor Totoro</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}