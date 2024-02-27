import { Dimensions, StyleSheet } from "react-native";
import { medium } from "../../../components/constants/fonts";

const {height,width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:height/2,
    },
    render:{
        width:"100%",
        height:height/2,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f2f2f2",
        padding:"5%",
        borderRadius:10,
        overflow:"hidden"
    },
    paragraph:{
        fontSize:14,
        fontFamily:medium,
        color:"black",
        lineHeight:24,
        textAlign:"justify"
    }
});

export default styles