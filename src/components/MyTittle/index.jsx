import { View, Text } from 'react-native'
import React from 'react'

const Mytitle = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Mytitle


