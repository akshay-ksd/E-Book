import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './style'

const CategoryList = () => {
    const data = [{ image: "https://myscena.org/wp-content/uploads/2021/10/Beethoven_X_Header-e1635204954120.jpg" },
    { image: "https://framerusercontent.com/images/g0wshsheaqj4o7Ah9I1WK9LRp8.jpg" },
    { image: "https://rareconnections.io/wp-content/uploads/2023/08/AI-music-video-generators.webp" }]

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={styles.item}>
                <Image style={styles.box} source={{ uri: item?.image }} />
                <Text style={styles.titleText}>Title</Text>
                <Text style={styles.subtitle}>Sub Title</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Albums</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <FlatList data={data} renderItem={renderItem} keyExtractor={(i, n) => n.toString()} horizontal
                ItemSeparatorComponent={() => (<View style={{ width: 15 }} />)} contentContainerStyle={{ paddingTop: "3%" }} />
        </View>
    )
}

export default CategoryList