import { View, Text, FlatList, Animated, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'
import ActiveIndex from '../active-index/active-index'


interface dataType {
  id: number;
  paragraph: string
}

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const Content = () => {
  const data: dataType[] = [{
    id: 1,
    paragraph: `Once upon a time in a small village nestled between rolling hills and dense forests, there lived a curious young girl named Lila. Lila had a peculiar talent - she could communicate with animals. Not just in the way people usually did, but in a way that transcended language barriers.
    `
  },
  {
    id: 2,
    paragraph: `Gratitude, Ori revealed a secret to Lila: a hidden entrance to a magical realm deep within the heart of the forest. Intrigued, Lila followed Ori into this mysterious world, where animals of all kinds coexisted peacefully, each with its own unique story.
    `
  },
  {
    id: 3,
    paragraph: `Word of Lila's adventures spread throughout the enchanted realm, and animals from distant lands sought her guidance. She became a beloved figure, a bridge between the human and animal worlds.
    `
  },
  {
    id: 4,
    paragraph: `She began teaching her fellow villagers the importance of harmony with nature, encouraging them to respect and appreciate the creatures that shared their world. Slowly but surely, the village transformed into a haven of coexistence, where humans and animals lived side by side in peace.
    `
  },
  {
    id: 5,
    paragraph: `Gratitude, Ori revealed a secret to Lila: a hidden entrance to a magical realm deep within the heart of the forest. Intrigued, Lila followed Ori into this mysterious world, where animals of all kinds coexisted peacefully, each with its own unique story.
    `
  },
  {
    id: 6,
    paragraph: `Word of Lila's adventures spread throughout the enchanted realm, and animals from distant lands sought her guidance. She became a beloved figure, a bridge between the human and animal worlds.
    `
  },
  {
    id: 7,
    paragraph: `She began teaching her fellow villagers the importance of harmony with nature, encouraging them to respect and appreciate the creatures that shared their world. Slowly but surely, the village transformed into a haven of coexistence, where humans and animals lived side by side in peace.
    `
  },
  {
    id: 8,
    paragraph: `Gratitude, Ori revealed a secret to Lila: a hidden entrance to a magical realm deep within the heart of the forest. Intrigued, Lila followed Ori into this mysterious world, where animals of all kinds coexisted peacefully, each with its own unique story.
    `
  },
  {
    id: 9,
    paragraph: `Word of Lila's adventures spread throughout the enchanted realm, and animals from distant lands sought her guidance. She became a beloved figure, a bridge between the human and animal worlds.
    `
  },
  {
    id: 10,
    paragraph: `She began teaching her fellow villagers the importance of harmony with nature, encouraging them to respect and appreciate the creatures that shared their world. Slowly but surely, the village transformed into a haven of coexistence, where humans and animals lived side by side in peace.
    `
  }
  ]
  const scrollX = useRef(new Animated.Value(0)).current
  const [focusedIndex, setFocusedIndex] = useState<any>(null);
  const indexRef:any = useRef();

  const renderItem = ({ item, index }: { item: dataType, index: number }) => {
    const inputRange = [
      (index - 1) * height/2,
      index * height/2,
      (index + 1) * height/2
    ]

    const scaleY = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0]
    })

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0]
    })
    return (
      <View style={[styles.render,]}>
        <Animated.Text style={[styles.paragraph,{transform:[{scale:scaleY}],opacity}]}>{item.paragraph}</Animated.Text>
      </View>
    )
  }

  const onViewableItemsChanged = ({ viewableItems }:any) => {
    indexRef.current.loadData(viewableItems[0]?.index)
  };

  return (
    <View style={[styles.container]}>
      <Animated.FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: dataType) => item.id.toString()}
        pagingEnabled
        contentContainerStyle={{ paddingHorizontal: "5%" }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y:scrollX}}}],
          {useNativeDriver:true}
        )}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <ActiveIndex ref={indexRef} data={data}/>
    </View>
  )
}

export default Content