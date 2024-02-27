import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Header from './header'
import BookDetails from './book-details'
import Content from './content'
const BookDetailsScreen:FC<any> = (props) => {
  const image = props.route.params.image
  return (
    <View style={styles.container}>
      <Header/>
      <BookDetails image={image}/>
      <Content/>
    </View>
  )
}

export default BookDetailsScreen