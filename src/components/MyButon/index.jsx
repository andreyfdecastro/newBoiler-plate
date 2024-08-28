import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TextButon from '../TextButon'

const Mybutton = ({screen,name}) => {
    const navigation = useNavigation()
  return (
  <touchableOpacity onPress={() => navigation.navigate(screen)}>
 <TextButon text={name} />
    </touchableOpacity>
  )
}

export default Mybutton