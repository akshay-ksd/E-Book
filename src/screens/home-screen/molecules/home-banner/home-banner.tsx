import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './style'

const HomeBanner = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri:"https://assets-global.website-files.com/63f902d79a33f7ff016cde0b/63f902d89a33f7cf006ce745_6390a109c2a6079c2925496a_MUSIC-W-AI-1.jpeg"}} style={styles.banner} />
        </View>
    )
}

export default HomeBanner