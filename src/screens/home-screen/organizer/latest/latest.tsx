import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Latest = () => {
  const Data = [{ image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-81174,resizemode-75,msid-103656314/magazines/panache/chaleya-from-jawan-hits-a-sweet-note-on-spotify-india-clocks-2-4-mn-streams-to-become-most-played-song-in-a-single-day-on-music-platform.jpg" },
  { image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-81174,resizemode-75,msid-103656314/magazines/panache/chaleya-from-jawan-hits-a-sweet-note-on-spotify-india-clocks-2-4-mn-streams-to-become-most-played-song-in-a-single-day-on-music-platform.jpg" },
  { image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-81174,resizemode-75,msid-103656314/magazines/panache/chaleya-from-jawan-hits-a-sweet-note-on-spotify-india-clocks-2-4-mn-streams-to-become-most-played-song-in-a-single-day-on-music-platform.jpg" },
  { image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-81174,resizemode-75,msid-103656314/magazines/panache/chaleya-from-jawan-hits-a-sweet-note-on-spotify-india-clocks-2-4-mn-streams-to-become-most-played-song-in-a-single-day-on-music-platform.jpg" },
  { image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-81174,resizemode-75,msid-103656314/magazines/panache/chaleya-from-jawan-hits-a-sweet-note-on-spotify-india-clocks-2-4-mn-streams-to-become-most-played-song-in-a-single-day-on-music-platform.jpg" }]

  const renderItem = (item: any) => {
    return (
      <View style={styles.render}>
        <Image source={{ uri: item?.image }} style={styles.image} />
        <View style={styles.detailsView}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.subTitle}>Sub title</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite</Text>
      </View>
      {
        Data.map((x) => renderItem(x))
      }
    </View>
  )
}

export default Latest