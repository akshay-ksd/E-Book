import { Dimensions, StyleSheet } from "react-native";
import { bold, medium } from "../../../../components/constants/fonts";
const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
        container:{
            width:"100%",
            height:"23%",
            paddingHorizontal:"5%"
        },
        header:{
            width:"100%",
            height:30,
            alignItems:"center",
            justifyContent:"space-between",
            flexDirection:"row"
        },
        title:{
            fontSize:18,
            fontFamily:bold,
            color:"black"
        },
        seeAll:{
            fontSize:12,
            color:"gray",
            fontFamily:medium
        },
        item:{
            width:width/3.7,
            height:150,
        },
        box:{
            width:"100%",
            height:"70%",
            borderRadius:10,
            // backgroundColor:"red"
        },
        titleText:{
            fontSize:14,
            fontFamily:medium,
            color:"black",
            marginTop:"5%",
            left:"2%"
        },
        subtitle:{
            fontSize:11,
            fontFamily:medium,
            color:"gray",
            left:"2%"
        }
});

export default styles