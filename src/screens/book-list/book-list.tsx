import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Header from './header/header'
import Category from './category/category'
import ItemList from './item-list/item-list'
const BookList = () => {
  return (
    <View style={styles.container}>
      <Category/>
      <ItemList/>
    </View>
  )
}

export default BookList