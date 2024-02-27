import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
const header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music</Text>
      <View style={styles.search}>
        <Icons name={"search"} size={25} color={"white"}/>
      </View>
    </View>
  )
}

export default header