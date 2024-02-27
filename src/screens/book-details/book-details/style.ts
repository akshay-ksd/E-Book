import { StyleSheet } from "react-native";
import { bold, medium } from "../../../components/constants/fonts";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '20%',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "5%",
    },
    image: {
        width: 70,
        height: 100,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    description:{
        width:"60%",
        height:"100%",
        justifyContent:"center",
        paddingLeft:"10%"
    },
    title:{
        fontSize:16,
        fontFamily:bold,
        color:"black"
    },
    subTitle:{
        fontSize:14,
        fontFamily:medium,
        color:"gray"
    },
    titleView:{
        flexDirection:"row"
    }
});

export default styles