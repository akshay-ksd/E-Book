import { StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";
import { bold, medium } from "../../../components/constants/fonts";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    catBox:{
        width:"25%",
        height:"50%",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color:colors.black,
        fontFamily:medium,
        fontSize:14
    },
    strike:{
        width:"50%",
        height:3,
        borderRadius:5,
        backgroundColor:"#009E60",
        top:5
    }
});

export default styles