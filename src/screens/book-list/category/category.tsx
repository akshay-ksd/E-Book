import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Category = () => {
  interface catBoxProps {
    title:string;
    id: number
  }

  const [activeId,setActiveId] = useState(1)
  const CatBox = ({title,id}:catBoxProps) => {
    return(
      <TouchableOpacity style={styles.catBox} onPress={()=>setActiveId(id)}>
          <Text style={[styles.title,{color:activeId == id?"black":"gray"}]}>{title}</Text>
          <View style={[styles.strike,{display:activeId == id?"flex":"none"}]}/>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
        <CatBox title='Design' id={1}/>
        <CatBox title='Architecture' id={2}/>
        <CatBox title='Poetry' id={3}/>
    </View>
  )
}

export default Category