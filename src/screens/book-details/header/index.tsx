import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Icons name={"chevron-back-outline"} size={18} color={"black"} />
            </TouchableOpacity>
            <View style={styles.settingsContainer}>
                <TouchableOpacity style={styles.backButton} >
                    <Icons name={"text-outline"} size={18} color={"black"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} >
                    <Icons name={"ellipsis-vertical-outline"} size={18} color={"black"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header