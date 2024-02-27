import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Header from './molecules/header/header'
import HomeBanner from './molecules/home-banner/home-banner'
import CategoryList from './organizer/catogory-list/catogory-list'
import Latest from './organizer/latest/latest';
import Player from './template/player/player';


const HomeScreen = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <HomeBanner />
        <CategoryList />
        <Latest />
      </ScrollView>
      <Player/>
    </>

  )
}

export default HomeScreen