import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"5%",
        justifyContent:"space-between"
    },
    backButton:{
        width:40,
        height:40,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f2f2f2"
    },
    settingsContainer:{
        width:"30%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    }
});

export default styles