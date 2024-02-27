import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "90%",
        width: "97%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingTop:"5%",
        paddingHorizontal:"5%"
    },
    searchBox:{
        width:"100%",
        height:55,
        borderWidth:2,
        borderRadius:10,
        borderColor:"#f2f2f2",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    image:{
        width:"100%",
        height:"100%",       
        borderRadius:10
    },
    imageContainer:{
        width:"26%",
        height:120,
        marginLeft:"5%",
        marginTop:"5%",
    }
});

export default styles