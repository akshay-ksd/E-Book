import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Animated, { FadeIn, FadeInLeft, FadeInUp } from 'react-native-reanimated'
interface detailsProps {
  image: string
}
const BookDetails: FC<detailsProps> = ({ image }) => {
  let title = "Harry Potter"
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInLeft.duration(1000)}>
      <Image source={{ uri: image }} style={styles.image} />
      </Animated.View>
      <View style={styles.description}>
        <View style={styles.titleView}>
          {
            title.split("").map((x,i) => (
              <Animated.Text style={styles.title} entering={FadeInLeft.duration(1000).delay(i*50)}>{x}</Animated.Text>
            ))
          }
        </View>
        <Animated.Text style={styles.subTitle} entering={FadeInUp.delay(1000).duration(500)}>Description about book</Animated.Text>
      </View>
    </View>
  )
}

export default BookDetails