import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn } from 'react-native-reanimated'
const ItemList = () => {
    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
    interface listType {
        catId:number;
        image:string
    }

    interface fltType {
        item:listType;
        index:number
    }

    const navigation:any = useNavigation()
    const data:listType[] = [{catId:1,image:"https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"},
                  {catId:1,image:"https://marketplace.canva.com/EAFPHUaBrFc/1/0/501w/canva-black-and-white-modern-alone-story-book-cover-25MR9XhisZk.jpg"},
                  {catId:1,image:"https://notionpress.com/images/newdesign/Okka-Bokka_eBook-cover.png"},
                  {catId:1,image:"https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg"},
                  {catId:1,image:"https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/67e7d0af6da92da36b63ed188bf03041-1662404941/Fella%20Ever%20After%20front.jpg"},
                  {catId:1,image:"https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg"},
                  {catId:1,image:"https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg"},
                  {catId:1,image:"https://www.adobe.com/express/discover/ideas/media_10e3cfe4d244d2d84937e3b4eb99dc054a47b80e9.png?width=750&format=png&optimize=medium"},
                  {catId:1,image:"https://images.ctfassets.net/usf1vwtuqyxm/6VuPUG4wPtmg3xvqwm6ZSn/2465365bae53ac09562f7bcea0b75cb3/English_Harry_Potter_2_Epub_9781781100226.jpg?w=914&q=70&fm=jpg"},
                  {catId:1,image:"https://notionpress.com/images/newdesign/Okka-Bokka_eBook-cover.png"},
                  {catId:1,image:"https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg"},
                  {catId:1,image:"https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/67e7d0af6da92da36b63ed188bf03041-1662404941/Fella%20Ever%20After%20front.jpg"},
                  {catId:1,image:"https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg"},
                  {catId:1,image:"https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg"},
                  {catId:1,image:"https://marketplace.canva.com/EAFPHUaBrFc/1/0/501w/canva-black-and-white-modern-alone-story-book-cover-25MR9XhisZk.jpg"},
                  {catId:1,image:"https://notionpress.com/images/newdesign/Okka-Bokka_eBook-cover.png"},
                  {catId:1,image:"https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg"},
                ]

    const renderItem =({item,index}:fltType)=>{
        return(
          <AnimatedTouchableOpacity 
            style={styles.imageContainer} 
            onPress={()=>navigation.navigate("BookDetailsScreen",{image:item.image})}
            entering={FadeIn.delay(index*50).duration(1000)}>
            <Image style={styles.image} source={{uri:item.image}}/>
          </AnimatedTouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
            <Icons name={"search"} color={"gray"} size={24}/>
            <TextInput placeholder='Search Books' style={{right:60}}/>
            <Icons name={"options-outline"} color={"gray"} size={24}/>
      </View>
      <FlatList data={data}
                renderItem={renderItem}
                numColumns={3}
                keyExtractor={(i,index)=>index.toString()}
      />
    </View>
  )
}

export default ItemList