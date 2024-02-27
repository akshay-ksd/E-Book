import { StyleSheet } from "react-native";
import { bold, medium } from "../../../../components/constants/fonts";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    search:{
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:26,
        color:"black",
        fontFamily:bold
    }
});

export default styles