import { Dimensions, StyleSheet } from "react-native";
import { bold, medium } from "../../../../components/constants/fonts";
const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexGrow:1,
        height:"50%",
    },
    render:{
        width:"100%",
        height:height/7.5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"5%",
        marginBottom:"5%"
    },
    image:{
        width:"30%",
        height:"100%",
        borderRadius:10
    },
    detailsView:{
        width:"50%",
        marginLeft:"5%"
    },
    title:{
        fontSize:14,
        fontFamily:medium,
        color:"black"
    },
    subTitle:{
        fontSize:12,
        fontFamily:medium,
        color:"gray"
    },
    header:{
        width:"100%",
        paddingHorizontal:"5%",
        height:"10%"
    },
    headerText:{
        fontSize:18,
        fontFamily:bold,
        color:"black"
    }
});

export default styles